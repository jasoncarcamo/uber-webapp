import React from "react";
import {DirectionsService, DirectionsRenderer} from "@react-google-maps/api";
import AppContext from "../../../../contexts/AppContext/AppContext";

/* eslint-disable */

export default class DirectionRenderer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            response: "",
            loaded: false
        }
    }

    static contextType = AppContext;

    directionsCallBack = (response)=>{

        // this sops from over limiting
        if(this.state.loaded){
            return;
        };

        if(!response){
            return;
        };

        this.context.tripsContext.editDestinationInfo(response);

        this.setState({
            response,
            loaded: true
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
                    destination: this.props.destination,
                    origin: this.props.origin,
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

                {this.state.response ? this.renderDirections() : ""}
            </>
        );
    };
};