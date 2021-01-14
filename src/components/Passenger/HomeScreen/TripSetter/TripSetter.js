import React from "react";
import "./TripSetter.css";
import TripSettingsScreen from "./TripSettingsScreen/TripSettingsScreen";
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
        this.setState({
            renderTripSettings: !this.state.renderTripSettings
        });
    }

    render(){
        return this.state.renderTripSettings ? <TripSettingsScreen toggleTripSettings={this.toggleTripSettings} history={this.props.history}/> : this.renderSetterSection()
    };
};