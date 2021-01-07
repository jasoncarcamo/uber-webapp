import React from "react";
import "./TripSettingsScreen.css";
import DateTimePicker from "./DateTimePicker/DateTimePicker";

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
                        <input id="" type="text" placeholder="Enter pickup location"/>
                        <input id="" type="text" placeholder="Where to?"/>

                        <DateTimePicker/>
                        
                        <button id="trip-settings-confirm">Looks Good</button>
                    </fieldset>
                </form>
            </section>
        );
    };
};