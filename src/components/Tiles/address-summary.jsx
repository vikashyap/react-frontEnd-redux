import React, { Component } from "react";


class Address extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { tileDetail } = this.props;
        let price =
            tileDetail.purpose === 0
                ? tileDetail.advertisementPrice.baseRent
                : tileDetail.advertisementPrice.sellPrice;
        return (
            <div>
                <p className="address">{`${tileDetail.realestateSummary.address
                    .postalCode} / Sinn 
                    ${tileDetail.realestateSummary.address.city}`}</p>
                <div className="siteDetail">
                    <span className="price">{price} &euro;</span>
                    <span>{`${tileDetail.realestateSummary
                        .numberOfRooms} Zimmer`}</span>
                        <span className="pipe"/>
                    <span>{`ab ${parseInt(tileDetail.realestateSummary.space)}`} m<sup>2</sup></span>
                </div>
            </div>
        );
    }
}

export default Address;
