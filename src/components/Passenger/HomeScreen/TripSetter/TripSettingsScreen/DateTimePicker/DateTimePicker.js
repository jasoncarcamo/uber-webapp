import React from "react";
import "./DateTimePicker.css";
import AppContext from "../../../../../../contexts/AppContext/AppContext";

export default class DateTimePicker extends React.Component{

    static contextType = AppContext;

    editDateTime = (e)=>{
        this.context.tripsContext.editTripInput(e);
    }

    render(){
        return <input 
            id="trip-setter-datetime" 
            type="datetime-local" 
            name="scheduled_datetime" 
            value={this.context.tripsContext.trip.scheduled_datetime} onChange={this.editDateTime} 
            mindate={new Date()}/>;
    };
};