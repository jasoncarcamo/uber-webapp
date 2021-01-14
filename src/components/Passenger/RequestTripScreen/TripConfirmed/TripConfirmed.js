import React from "react";
import "./TripConfirmed.css"

export default class TripConfirmed extends React.Component{

    confirm = ()=>{
        this.props.history.push("/passenger/trip")
    };
    
    render(){
        return (
            <section id="trip-confirmed-section">
                <h3>You have successfully requested a trip!</h3>
                <p>Please wait while we locate the closest driver.</p>
                <button onClick={this.confirm}>Ok, thanks!</button>
            </section>
        );
    };
};