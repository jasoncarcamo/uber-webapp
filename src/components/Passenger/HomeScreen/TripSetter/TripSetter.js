import React from "react";
import "./TripSetter.css";
import TripInstanceToken from "../../../../services/TripInstanceService/TripInstanceService";
import AppContext from "../../../../contexts/AppContext/AppContext";

export default class TripSetter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            renderTripSettings: false
        };
    };

    static contextType = AppContext;

    displayValue = ({tripsContext})=>{
        return tripsContext.trip.pick_up_address ? tripsContext.trip.pick_up_address : "";
    }

    cancelTrip = ()=>{
        this.context.tripsContext.cancelTrip();

        TripInstanceToken.removeTrip();

        this.context.mapContext.toggleDirections(false);
    }

    renderTripSetterButtons = ()=>{
        return (
            <div id="trip-setter-buttons-container">
                <button id="trip-setter-button" onClick={this.toggleTripSettings}>Now</button>
                {this.context.tripsContext.trip.pick_up_address ? <button onClick={this.cancelTrip}>Cancel</button> : ""}
            </div>
        )
    }

    renderSetterSection = ()=>{
        return (
            <section id="trip-setter-section">
                <input id="trip-setter-input" type="text" placeholder="Where to?" defaultValue={this.displayValue(this.context)} onClick={this.toggleTripSettings}/>
                {this.renderTripSetterButtons()}
            </section>
        );
    }

    toggleTripSettings = ()=>{
        this.props.history.push("/passenger/edit_trip")
    }

    render(){
        return (
            <section id="trip-setter-section">

                <input id="trip-setter-input" type="text" placeholder="Where to?" defaultValue={this.displayValue(this.context)} onClick={this.toggleTripSettings}/>

                {this.renderTripSetterButtons()}
            </section>
        );
    };
};