import React from "react";
import "./TripSettingsScreen.css";
import DateTimePicker from "./DateTimePicker/DateTimePicker";
import DestinationSetters from "./DestinationSetters/DestinationSetters";
import {Link} from "react-router-dom";

export default class TripSettingsScreen extends React.Component{

    toggleTripSetting = ()=>{
        this.props.toggleTripSettings();
    };

    render(){
        return (
            <section id="trip-settings-section">
                <button id="trip-settings-cancel" onClick={this.toggleTripSetting}>Back</button>
                
                <form id="trip-settings-form">
                    <fieldset id="trip-settings-fieldset">
                        
                        <DestinationSetters/>
                        <DateTimePicker/>

                        <button id="trip-settings-confirm">
                            <Link to="/passenger/request_trip">Looks Good!</Link>
                        </button>
                    </fieldset>
                </form>
            </section>
        );
    };
};