import React from "react";
import "./TripSetter.css";
import TripSettingsScreen from "./TripSettingsScreen/TripSettingsScreen";

export default class TripSetter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            renderTripSettings: false
        };
    };

    renderSetterSection = ()=>{
        return (
            <section id="trip-setter-section">
                <input id="trip-setter-input" type="text" placeholder="Where to?" onClick={this.toggleTripSettings}/>
                <button id="trip-setter-button" onClick={this.toggleTripSettings}>Now</button>
            </section>
        );
    }

    toggleTripSettings = ()=>{
        this.setState({
            renderTripSettings: !this.state.renderTripSettings
        });
    }

    render(){
        return this.state.renderTripSettings ? <TripSettingsScreen toggleTripSettings={this.toggleTripSettings}/> : this.renderSetterSection()
    };
};