import React from "react";
import "./CancelTrip.css";
import TripInstanceService from "../../../../../services/TripInstanceService/TripInstanceService";
import AppContext from "../../../../../contexts/AppContext/AppContext";
import PassengerToken from "../../../../../services/PassengerToken/PassengerToken";

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
        const id = this.context.tripsContext.trip.id;

        fetch(`http://localhost:7000/api/trip/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': "application/json",
                'authorization': `bearer ${PassengerToken.getToken()}`
            }
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            })
            .then( resData => {
                TripInstanceService.removeTrip();

                this.context.tripsContext.cancelTrip();

                this.context.mapContext.toggleDirections(false);
                this.setState({
                    cancelSuccess: true
                });
            })
            .catch( err => {
                this.setState({
                    error: err.error
                });
            });
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
        console.log(this.context.tripsContext, this.context)
        return (
            <section id="cancel-trip-section">
                {!this.state.cancel && !this.state.cancelSuccess ? this.renderCancelButton() : ""}
                {this.state.cancel && !this.state.cancelSuccess ? this.renderCancelOptions() : ""}
                {this.state.cancel && this.state.cancelSuccess ? this.renderCancelConfirm() : ""}
            </section>
        )
    };
};