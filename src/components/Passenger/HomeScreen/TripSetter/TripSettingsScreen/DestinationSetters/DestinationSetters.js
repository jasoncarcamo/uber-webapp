import React from "react";
import AppContext from "../../../../../../contexts/AppContext/AppContext";
import "./DestinationSetters.css";

export default class DestinationSetters extends React.Component{
    render(){
        return (
            <>
                <input className="trip-settings-input" type="text" placeholder="Enter pickup location" name="pick_up_address"/>
                <input className="trip-settings-input" type="text" placeholder="Where to?" name="drop_off-address"/>
            </>
        );
    };
};