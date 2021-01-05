import React from "react";
import {GoogleMap, Marker} from "@react-google-maps/api";
import AppContext from "../../../contexts/AppContext/AppContext";

export default class Map extends React.Component{

    static contextType = AppContext;

    center = {
        lat: -3.745,
        lng: -38.523
    };

    render(){
        let position;

        if(this.context.mapContext.passengerLocation.lat){
            position = this.context.mapContext.passengerLocation;
        }else {
            position = this.center;
        };

        return (
            <GoogleMap
                center={position}
                zoom={10}
                mapContainerStyle={this.props.mapContainerStyle}
                options={{
                    fullscreenControl: false,
                    mapTypeControl: false
                }}>
                    <Marker position={position}/>
            </GoogleMap>
        )
    }
}