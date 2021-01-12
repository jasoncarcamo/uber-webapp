import React from "react";
import "./TripSettingsScreen.css";
import DateTimePicker from "./DateTimePicker/DateTimePicker";
import DestinationSetters from "./DestinationSetters/DestinationSetters";
import {Link} from "react-router-dom";
import AppContext from "../../../../../contexts/AppContext/AppContext";

export default class TripSettingsScreen extends React.Component{

    static contextType = AppContext;

    toggleTripSetting = ()=>{
        this.props.toggleTripSettings();
    };

    toggleDirections = (e)=>{
        e.preventDefault();
        this.context.mapContext.toggleDirections();
        this.props.history.push("/passenger/request_trip");
    }

    render(){
        return (
            <section id="trip-settings-section">
                <button id="trip-settings-cancel" onClick={this.toggleTripSetting}>Back</button>
                
                <form id="trip-settings-form">
                    <fieldset id="trip-settings-fieldset">
                        
                        <DestinationSetters/>
                        <DateTimePicker/>

                        <button id="trip-settings-confirm" type="button" onClick={this.toggleDirections}>
                            Looks Good!
                        </button>
                    </fieldset>
                </form>
            </section>
        );
    };
};