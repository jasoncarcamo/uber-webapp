import React from "react";
import {DirectionsService, DirectionsRenderer} from "@react-google-maps/api";
import AppContext from "../../../../contexts/AppContext/AppContext";

/* eslint-disable */

export default class DirectionRenderer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            response: ""
        }
    }

    static contextType = AppContext;

    directionsCallBack = (response)=>{
        this.setState({
            response
        });

        return;
    }

    renderDirections = ()=>{
        return (
            <DirectionsRenderer
                options={{
                    directions: this.state.response
                }}>
                
            </DirectionsRenderer>
        );
    }

    render(){
        return (
            <>
                <DirectionsService
                  // required
                  options={{ // eslint-disable-line react-perf/jsx-no-new-object-as-prop
                    destination: this.context.tripsContext.trip.drop_off_address,
                    origin: this.context.tripsContext.trip.pick_up_address,
                    travelMode: "DRIVING"
                  }}
                  // required
                  callback={this.directionsCallBack}
                  // optional
                  onLoad={directionsService => {
                    console.log('DirectionsService onLoad directionsService: ', directionsService)
                  }}
                  // optional
                  onUnmount={directionsService => {
                    console.log('DirectionsService onUnmount directionsService: ', directionsService)
                  }}
                >
                </DirectionsService>

                {this.state.response !== null && this.context.tripsContext.toggleDirections ? this.renderDirections() : ""}
            </>
        );
    };
};