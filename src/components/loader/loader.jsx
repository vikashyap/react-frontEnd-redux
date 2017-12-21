import React, { Component } from "react";
import Styles from "./styles.scss";

class Loader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        	<div className="loading">Loading&#8230;</div>
        );
    }

}

export default Loader;
