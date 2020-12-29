import React from "react";
import {GoogleMap} from "@react-google-maps/api";

export default class Map extends React.Component{
    center = {
        lat: -3.745,
        lng: -38.523
    };

    render(){
        return (
            <GoogleMap
                center={this.center}
                zoom={10}
                mapContainerStyle={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    flex: 1,
                    height: "100%",
                    width: "100%",
                    padding: 0,
                    margin: 0,
                    zIndex: 2
                }}>

            </GoogleMap>
        )
    }
}