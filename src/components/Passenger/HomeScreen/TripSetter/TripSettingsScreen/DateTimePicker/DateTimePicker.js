import React from "react";

export default class DateTimePicker extends React.Component{
    render(){
        return <input id="trip-setter-datetime" type="datetime-local" value={this.props.datetime} onChange={(e)=>this.setState({ date: e.target.value})}/>;
    };
}