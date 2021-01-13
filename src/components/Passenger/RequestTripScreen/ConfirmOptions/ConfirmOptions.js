import React from "react";
import "./ConfirmOptions.css";
import AppContext from "../../../../contexts/AppContext/AppContext";
import TripInstanceService from "../../../../services/TripInstanceService/TripInstanceService";

export default class ConfirmOptions extends React.Component{

    static contextType = AppContext;

    requestTrip = ()=>{
        const trip = this.context.tripsContext.trip;

        if(!trip.pick_up_address && !trip.drop_off_address){
            return
        }

        // save instance of requested trip
        TripInstanceService.saveTrip(trip);

        this.props.history.push("/passenger/trip_confirmed");        
    }

    cancelTrip = ()=>{

        TripInstanceService.removeTrip();

        this.context.tripsContext.cancelTrip();

        this.context.mapContext.toggleDirections(false);

        this.props.history.push("/");
    }
    
    render(){
        return (
            <section id="confirm_trip_section">
                <button onClick={this.requestTrip}>Confirm</button>
                <button onClick={this.cancelTrip}>Cancel</button>
            </section>
        );
    };
};