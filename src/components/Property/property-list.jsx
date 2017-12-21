import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPropertyList }  from '../../actions/property-list';
import Grid from '../Grid/grid'


class Properties extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.loadPropertyList(); 
    }
    render(){
        return(
        <Grid propertyList={this.props.propertyList} />
        )
    }        
}
const mapStateToProps = state => {
    return {
        propertyList:state.propertyList.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadPropertyList: () => {
            dispatch(loadPropertyList());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Properties);
