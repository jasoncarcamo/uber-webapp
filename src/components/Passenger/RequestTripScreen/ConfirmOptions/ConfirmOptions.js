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

    calculatePrice = (distance)=>{
        let newDistance = Number(distance.split(" ")[0]);
        let price = 6 + ( newDistance- 2);

        return Math.ceil(price);
    }

    renderTripInfo = ({tripsContext})=>{
        return (
            <section id="confirm_trip_info">
                <p>Pick up: {tripsContext.trip.pick_up_address}</p>
                <p>Drop off: {tripsContext.trip.drop_off_address}</p>
                <p>Distance: {tripsContext.trip.distance}</p>
                <p>Duration: {tripsContext.trip.duration}</p>
                <p>Price: {this.calculatePrice(tripsContext.trip.distance)}</p>
            </section>
        )
    }

    editTrip = ()=>{
        this.props.goBack();
    } 
    
    render(){
        console.log(this.context);
        return (
            <section id="confirm_trip_section">
                {this.renderTripInfo(this.context)}
                <button onClick={this.requestTrip}>Confirm</button>
                <button onClick={this.editTrip}>Edit</button>
                <button onClick={this.cancelTrip}>Cancel</button>
            </section>
        );
    };
};