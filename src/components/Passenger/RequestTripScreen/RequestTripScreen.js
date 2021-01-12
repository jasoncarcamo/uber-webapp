import React from "react";
import Map from "../Map/Map";
import ConfirmOptions from "./ConfirmOptions/ConfirmOptions";

export default class RequestTripScreen extends React.Component{

    goBack = ()=>{
        this.props.history.goBack();
    };

    render(){
        return (
            <section>
                <button onClick={this.goBack}>Back</button>
                <Map mapContainerStyle={mapStyle}/>
                <ConfirmOptions history={this.props.history}/>
            </section>
        );
    };
};

const mapStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: -1,
    width: "100%",
    height: "80vh",
}