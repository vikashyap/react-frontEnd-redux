import React, { Component } from "react";
import Header from "../Header/header";
import Styles from "./styles.scss";
import Button from "../Button/button";
import Address from "./address-summary";

class TilesDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { tileDetail } = this.props;
        let imageUrl = tileDetail.advertisementAssets[0]
            ? tileDetail.advertisementAssets[0].advertisementThumbnails
                  .inventory_m.url
            : tileDetail.advertisementAssets.advertisementThumbnails.inventory_m
                  .url;
        return (
            <div className="tilesDetail">
                <img className="imageContainer" src={imageUrl} />
                <Button
                    btnText={tileDetail.purpose === 0 ? "Mieten" : "Kaufen"}
                />
                <p title={tileDetail.title} className="title">
                    {tileDetail.title}
                </p>
              <Address tileDetail={tileDetail}/>
            </div>
        );
    }
}

export default TilesDetail;
