import React from "react";
import {GoogleMap, Marker, InfoWindow} from "@react-google-maps/api";
import AppContext from "../../../contexts/AppContext/AppContext";
import DirectionRenderer from "./DirectionRenderer/DirectionRenderer";

export default class Map extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            renderDirections: false
        }
    }

    static contextType = AppContext;

    center = {
        lat: -3.745,
        lng: -38.523
    };

    onLoad = (infoWindow)=>{
        console.log(infoWindow)
    }

    renderDirections = ()=>{
        const origin = this.context.tripsContext.trip.pick_up_address;
        const destination = this.context.tripsContext.trip.drop_off_address;

        console.log(origin, destination)

        return <DirectionRenderer origin={origin} destination={destination}/>;
    }

    renderTripLocations = ({tripsContext})=>{
        const {
            pick_up_lat,
            pick_up_lng,
            drop_off_lat,
            drop_off_lng
        } = tripsContext.trip;

        const tripPickUpLocation = {
            lat: pick_up_lat,
            lng: pick_up_lng,
        };

        const tripDropOffLocation = {
            lat: drop_off_lat,
            lng: drop_off_lng
        };

        const directions = {
            tripPickUpLocation, 
            tripDropOffLocation
        };

        for(const [key, value] of Object.entries(directions)){
            for(const [directionKey, directionValue] of Object.entries(directions[key])){
                if(!directionValue){
                    return;
                }
            };
        };

        //using InfoWindow to subsitute for Icons
        return (
            <>
                <InfoWindow position={tripPickUpLocation} onLoad={this.onLoad}>
                    <div>
                    <p>Pick up location</p>
                    </div>
                </InfoWindow>
                
                <InfoWindow position={tripDropOffLocation} onLoad={this.onLoad}>
                    <div>
                    <p>Drop off location</p>
                    </div>
                </InfoWindow>
            </>
        );
    }

    renderPassengerLocation = ({mapContext})=>{

        const {
            lat,
            lng
        } = mapContext.passengerLocation;

        const passengerLocation = {
            lat,
            lng
        };

        for(const [key, value] of Object.entries(passengerLocation)){
            if(!value){
                return <Marker position={this.center}/>;
            };
        };

        return <Marker position={passengerLocation}/>;
    }

    render(){
        let position;

        if(this.context.mapContext.passengerLocation.lat !== ""){
            position = this.context.mapContext.passengerLocation;
        }else{
            position = this.center;
        };
        console.log(this.context)
        return (
            <GoogleMap
                center={position}
                zoom={10}
                mapContainerStyle={mapContainerStyle}
                options={{
                    fullscreenControl: false,
                    mapTypeControl: false
                }}>
                    {this.renderPassengerLocation(this.context)}
                    {this.renderTripLocations(this.context)}
                    {this.context.mapContext.renderDirections ? this.renderDirections() : ""}
            </GoogleMap>
        );
    };
};

const mapContainerStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: -1,
    width: "100%",
    height: "80vh",
}