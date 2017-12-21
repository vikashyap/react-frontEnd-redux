import React, { Component } from 'react';
import Styles from './styles.scss';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
    }
    render(){
        return(
        <header id="header" className={Styles.header}></header>
        )
    }
        
}

export default Header;
