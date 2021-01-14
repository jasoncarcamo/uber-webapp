import React from "react";
import "./ConfirmOptions.css";
import AppContext from "../../../../contexts/AppContext/AppContext";
import TripInstanceService from "../../../../services/TripInstanceService/TripInstanceService";

export default class ConfirmOptions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            confirmTrip: false
        }
    }

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
        let price = 6 + ( newDistance - 2);

        if(!distance){
            return "";
        };

        return `$${Math.ceil(price)}`;
    }

    renderTripInfo = ({tripsContext})=>{
        return (
            <section id="confirm_trip_info">
                <p><strong>Pick up:</strong> {tripsContext.trip.pick_up_address}</p>
                <p><strong>Drop off:</strong> {tripsContext.trip.drop_off_address}</p>
                <p><strong>Distance:</strong> {tripsContext.trip.distance}</p>
                <p><strong>Duration:</strong> {tripsContext.trip.duration}</p>
                <p><strong>Price:</strong> {this.calculatePrice(tripsContext.trip.distance)}</p>

                {this.state.confirmTrip ? <button id="confirm-trip-info-button" onClick={this.requestTrip}>Confirm</button> : ""}
            </section>
        )
    }

    editTrip = ()=>{
        this.props.history.goBack();
    } 

    confirmTrip = ()=>{
        const confirmSection = document.getElementById("confirm_trip_section");
        const tripInfo = document.getElementById("confirm_trip_info");

        confirmSection.classList.add("open-confirm-section")
        tripInfo.classList.add("open-trip-info")

        this.setState({
            confirmTrip: true
        });
    }
    
    render(){
        console.log(this.context);
        return (
            <section id="confirm_trip_section">
                {this.renderTripInfo(this.context)}
                
                <div id="confirm-trip-buttons-container">
                    {!this.state.confirmTrip ? <button onClick={this.confirmTrip}>Confirm</button> : ""}
                    <button onClick={this.editTrip}>Edit</button>
                    <button onClick={this.cancelTrip}>Cancel</button>
                </div>
            </section>
        );
    };
};