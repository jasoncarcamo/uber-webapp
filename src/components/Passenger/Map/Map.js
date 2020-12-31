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
                mapContainerStyle={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    flex: 1,
                    height: "100%",
                    width: "100%",
                    padding: 0,
                    margin: 0,
                    zIndex: -1
                }}>
                    <Marker position={position}/>
            </GoogleMap>
        )
    }
}