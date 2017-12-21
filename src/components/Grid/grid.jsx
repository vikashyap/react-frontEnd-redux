import React, { Component } from "react";
import Header from "../Header/header";
import Styles from "./styles.scss";
import Tiles from "../Tiles/tiles-detail";
import Loader from "../loader/loader";
import Pagination from "../Pagination/pagination";


class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageOfItems: []
        };
        // bind function in constructor instead of render
        this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    render() {
        let { propertyList } = this.props;
        let tiles = propertyList ? (
            this.state.pageOfItems.map((item, index) => {
                return (
                    <div key={index} className="tiles">
                        <Tiles tileDetail={item} />
                    </div>
                );
            })
        ) : (
            <Loader />
        );
        return (
            <div className="container">
                <Header />
                <div className="grid">{tiles}</div>
                {propertyList && <Pagination items={propertyList} onChangePage={this.onChangePage} />}
            </div>
        );
    }
}

export default Grid;
