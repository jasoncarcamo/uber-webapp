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
        const {
            pick_up_address,
            drop_off_address,
            scheduled_date_time
        } = this.context.tripsContext.trip;
        const requirements = {
            pick_up_address,
            drop_off_address,
            scheduled_date_time
        };

        for(const [key, value] of Object.entries(requirements)){
            if(!value){
                const error = `Missing ${key.split("_").join(" ")}`;

                this.context.tripsContext.setError(error);

                return;
            };
        };

        this.context.mapContext.toggleDirections(true);

        this.props.history.push("/passenger/request_trip");
    }

    renderError = ({tripsContext})=>{
        const error = tripsContext.error;

        if(error){
            return <p className="requirements-error">{error}</p>;
        } else{
            return ""
        };
    }

    render(){
        return (
            <section id="trip-settings-section">
                <button id="trip-settings-cancel" onClick={this.toggleTripSetting}>Back</button>
                
                <form id="trip-settings-form">
                    <fieldset id="trip-settings-fieldset">
                        
                        <DestinationSetters/>
                        <DateTimePicker/>

                        {this.renderError(this.context)}
                        <button id="trip-settings-confirm" type="button" onClick={this.toggleDirections}>
                            Looks Good!
                        </button>
                    </fieldset>
                </form>
            </section>
        );
    };
};