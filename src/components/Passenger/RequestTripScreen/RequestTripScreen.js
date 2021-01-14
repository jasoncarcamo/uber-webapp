import React from "react";
import Map from "../Map/Map";
import ConfirmOptions from "./ConfirmOptions/ConfirmOptions";

export default class RequestTripScreen extends React.Component{

    render(){
        return (
            <section>
                <Map mapContainerStyle={mapStyle}/>
                <ConfirmOptions history={this.props.history}/>
            </section>
        );
    };
};

const mapStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100%",
    height: "55vh",
    minHeight: "19.6em"
}