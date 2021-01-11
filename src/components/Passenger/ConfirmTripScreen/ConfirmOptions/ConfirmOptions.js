import React from "react";
import "./ConfirmOptions.css";
import AppContext from "../../../../contexts/AppContext/AppContext";

export default class ConfirmOptions extends React.Component{

    static contextType = AppContext;

    cancelTrip = ()=>{
        this.context.tripsContext.cancelTrip();

        this.props.history.push("/");
    }
    
    render(){
        return (
            <section id="confirm_trip_section">
                <button>Confirm</button>
                <button onClick={this.cancelTrip}>Cancel</button>
            </section>
        );
    };
};