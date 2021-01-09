import React from "react";
import AppContext from "../../../../../../contexts/AppContext/AppContext";
import "./DestinationSetters.css";

export default class DestinationSetters extends React.Component{

    static contextType = AppContext;

    editInput = (e)=>{
        this.context.tripsContext.editTripInput(e);
    };

    render(){
        return (
            <>
                <input className="trip-settings-input" type="text" placeholder="Enter pickup location" name="pick_up_address" value={this.context.tripsContext.trip.pick_up_address} onChange={this.editInput}/>
                <input className="trip-settings-input" type="text" placeholder="Where to?" name="drop_off_address" value={this.context.tripsContext.trip.drop_off_address} onChange={this.editInput}/>
            </>
        );
    };
};