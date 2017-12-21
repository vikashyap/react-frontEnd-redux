import React, { Component } from "react";
import Header from "../Header/header";
import Styles from "./styles.scss";

class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { btnText } = this.props;
        return (
            <span className="button">{btnText}</span>
        );
    }

}

export default Button;
