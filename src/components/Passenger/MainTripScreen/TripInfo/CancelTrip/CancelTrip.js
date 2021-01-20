import React from "react";
import "./CancelTrip.css";
import TripInstanceService from "../../../../../services/TripInstanceService/TripInstanceService";
import AppContext from "../../../../../contexts/AppContext/AppContext";

export default class CancelTrip extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cancel: false,
            cancelSuccess: false
        }
    }

    static contextType = AppContext;

    toggleCancel = ()=>{
        this.setState({
            cancel: !this.state.cancel
        });
    }

    renderCancelButton = ()=>{
        return <button onClick={this.toggleCancel}>Cancel trip</button>;
    };

    handleCancel = ()=>{
        this.setState({
            cancelSuccess: true
        })
    }

    renderCancelOptions = ()=>{
        return (
            <section id="cancel-trip-options-section">
                <p>Are you sure you want to cancel?</p>
                <section>
                    <button onClick={this.handleCancel}>Yes</button>
                    <button onClick={this.toggleCancel}>Back</button>
                </section>
            </section>
        );
    }

    cancelSuccess = ()=>{
        TripInstanceService.removeTrip();

        this.context.tripsContext.cancelTrip();

        this.context.mapContext.toggleDirections(false);

        this.props.history.push("/");
    }

    renderCancelConfirm = ()=>{
        return (
            <section id="cancel-trip-confirm-section">
                <p>You have succefully canceled this trip, have a nice day!</p>
                <button onClick={this.cancelSuccess}>Thanks</button>
            </section>
        );
    }

    render(){
        return (
            <section id="cancel-trip-section">
                {!this.state.cancel && !this.state.cancelSuccess ? this.renderCancelButton() : ""}
                {this.state.cancel && !this.state.cancelSuccess ? this.renderCancelOptions() : ""}
                {this.state.cancel && this.state.cancelSuccess ? this.renderCancelConfirm() : ""}
            </section>
        )
    };
};