import React from "react";
import "./ConfirmOptions.css";

export default class ConfirmOptions extends React.Component{
    
    render(){
        return (
            <section id="confirm_trip_section">
                <button>Confirm</button>
                <button>Cancel</button>
            </section>
        );
    };
};