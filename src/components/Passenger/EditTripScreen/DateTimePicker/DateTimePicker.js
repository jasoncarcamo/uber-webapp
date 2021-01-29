import React from "react";
import "./DateTimePicker.css";
import AppContext from "../../../../contexts/AppContext/AppContext";

export default class DateTimePicker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            trip: {}
        }
    }

    static contextType = AppContext;

    componentDidMount(){
        this.setState({
            trip: Object.assign({}, this.context.tripsContext.trip)
        });
    }

    editDateTime = (e)=>{
        const trip = this.context.tripsContext.trip;

        trip[e.currentTarget.name] = e.currentTarget.value;

        this.setState({
            trip
        });

        this.context.tripsContext.editTripInput(trip);
    }

    render(){
        return (
            <label id="trip-setter-datetime-label" htmlFor="trip-setter-datetime">
                For when?
                <input 
                    id="trip-setter-datetime" 
                    type="datetime-local" 
                    name="scheduled_date_time" 
                    value={this.state.trip.scheduled_date_time} onChange={this.editDateTime} 
                    min={new Date()}/>
            </label>
        );
    };
};