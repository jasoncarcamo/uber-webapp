import React from "react";
import AppContext from "../../../../contexts/AppContext/AppContext";
import "./EditAccount.css";

export default class EditAccount extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            passenger: {},
            editSuccess: false
        }
    }
    
    static contextType = AppContext;

    componentDidMount(){
        this.setState({
            passenger: Object.assign({}, this.context.passengerContext.passenger)
        });
    }

    toggleEditAccount = ()=>{
        this.props.toggleEditAccount();
    }

    editPassengerInput = (e)=>{
        const passenger = this.state.passenger;

        passenger[e.target.name] = e.target.value;

        this.setState({
            passenger
        });
    }

    saveNewPassengerInfo = ()=>{
        const passenger = this.state.passenger;

        this.context.passengerContext.setPassenger(passenger);

        this.props.toggleEditSuccess();
    }

    render(){
        console.log(this.context.passengerContext.passenger, this.state.passenger)
        return (
            <form id="edit-account-form">
                <fieldset id="edit-account-fieldset">
                    <button 
                        id="edit-account-back-button"
                        onClick={this.toggleEditAccount}>Back</button>
                    <legend>Edit Account</legend>

                    <label className="edit-account-label">
                        First name:
                        <input 
                        id="" 
                        className="edit-account-input" 
                        type="text" 
                        onChange={this.editPassengerInput}
                        value={this.state.passenger.first_name}
                        name="first_name"/>
                    </label>

                    <label className="edit-account-label">
                        Last name:
                        <input 
                        id="" 
                        className="edit-account-input" 
                        type="text" 
                        onChange={this.editPassengerInput}
                        value={this.state.passenger.last_name}
                        name="last_name"/>
                    </label>

                    <label className="edit-account-label">
                        Mobile number:
                        <input 
                        id="" 
                        className="edit-account-input" 
                        type="text" 
                        onChange={this.editPassengerInput}
                        value={this.state.passenger.mobile_number}
                        name="mobile_numer"/>
                    </label>
    
                    <label className="edit-account-label">
                        Home address:
                        <input 
                        id="" 
                        className="edit-account-input" 
                        type="text" 
                        onChange={this.editPassengerInput}
                        value={this.state.passenger.home_address || ""}
                        name="home_address"/>
                    </label>

                    <label className="edit-account-label">
                        Work address:
                        <input 
                        id="" 
                        className="edit-account-input" 
                        type="text" 
                        onChange={this.editPassengerInput}
                        value={this.state.passenger.work_address || ""}

                        name="work_address"/>
                    </label>

                    <button type="button" onClick={this.saveNewPassengerInfo}>Save</button>
                </fieldset>
            </form>
        )
    }
}