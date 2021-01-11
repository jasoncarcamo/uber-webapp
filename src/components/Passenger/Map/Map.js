import React from "react";
import {GoogleMap, Marker, InfoWindow} from "@react-google-maps/api";
import AppContext from "../../../contexts/AppContext/AppContext";

export default class Map extends React.Component{

    static contextType = AppContext;

    center = {
        lat: -3.745,
        lng: -38.523
    };

    onLoad = (infoWindow)=>{
        console.log(infoWindow)
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

        for(const [key, value] of Object.entries({tripPickUpLocation, ...tripDropOffLocation})){
            if(!value){
                return;
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

        return <Marker position={passengerLocation}/>;
    }

    render(){

        let position;

        if(this.context.mapContext.passengerLocation.lat){
            position = this.context.mapContext.passengerLocation;
        }else{
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
                    <Marker position={this.center}/>
                    {this.renderPassengerLocation(this.context)}
                    {this.renderTripLocations(this.context)}
            </GoogleMap>
        )
    }
}