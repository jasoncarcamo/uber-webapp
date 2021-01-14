import React from "react";
import "./DateTimePicker.css";
import AppContext from "../../../../contexts/AppContext/AppContext";

export default class DateTimePicker extends React.Component{

    static contextType = AppContext;

    editDateTime = (e)=>{
        this.context.tripsContext.editTripInput(e);
    }

    render(){
        return (
            <label id="trip-setter-datetime-label" htmlFor="trip-setter-datetime">
                For when?
                <input 
                    id="trip-setter-datetime" 
                    type="datetime-local" 
                    name="scheduled_date_time" 
                    value={this.context.tripsContext.trip.scheduled_date_time} onChange={this.editDateTime} 
                    min={new Date()}/>
            </label>
        )
    };
};