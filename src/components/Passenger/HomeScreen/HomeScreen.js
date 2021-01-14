import React from "react";
import TripSetter from "./TripSetter/TripSetter";
import Map from "../Map/Map";

export default class HomeScreen extends React.Component{
    render(){
        return (
            <section>

                <TripSetter history={this.props.history}/>
                <Map mapContainerStyle={mapContainerStyle}/>
            </section>
        );
    };
};

const mapContainerStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    flex: 1,
    height: "100vh",
    width: "100%",
    padding: 0,
    margin: 0,
    zIndex: -1
};