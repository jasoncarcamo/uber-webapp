import React from "react";
import "./DateTimePicker.css";

export default class DateTimePicker extends React.Component{
    render(){
        return <input id="trip-setter-datetime" type="datetime-local" name="scheduled_datetime" value={this.props.datetime} onChange={(e)=>this.setState({ date: e.target.value})}/>;
    };
};