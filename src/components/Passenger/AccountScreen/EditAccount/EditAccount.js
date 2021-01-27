import React from "react";
import AppContext from "../../../../contexts/AppContext/AppContext";
import "./EditAccount.css";
import PassengerToken from "../../../../services/PassengerToken/PassengerToken";

export default class EditAccount extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            passenger: {},
            originalPassengerInfo: {},
            editSuccess: false
        }
    }
    
    static contextType = AppContext;

    componentDidMount(){
        this.setState({
            passenger: Object.assign({}, this.context.passengerContext.passenger),
            originalPassengerInfo: this.context.passengerContext.passenger
        });
    }

    toggleEditAccount = ()=>{
        this.props.toggleEditAccount();
    }

    editPassengerInput = (e)=>{
        const passenger = this.state.passenger;

        passenger[e.target.name] = e.target.value;

        this.setState({
            passenger,
            error: ""
        });
    }

    saveNewPassengerInfo = ()=>{
        const passenger = this.state.passenger;
        const originalPassengerInfo = this.state.originalPassengerInfo;
        let changed = false;
        
        for(const [key, value] of Object.entries(passenger)){

            console.log(passenger[key], originalPassengerInfo[key]);

            if(originalPassengerInfo[key] !== passenger[key]){
                changed = true;
            };
        };

        console.log(passenger.mobile_number.includes(originalPassengerInfo.mobile_number));

        if(!changed){
            this.setState({
                error: "No changes have been made. Please make a change to save."
            });

            return;
        };

        fetch("http://localhost:7000/api/passenger-info", {
            method: "POST",
            headers: {
                'content-type': "application/json",
                'authorization': `bearer ${PassengerToken.getToken()}`
            },
            body: JSON.stringify(this.state.passenger)
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            })
            .then( resData => {
                console.log(resData);
                this.context.passengerContext.setPassenger(resData.updatedPassenger);

                this.props.toggleEditSuccess();
            })
            .catch( err => {
                console.log(err);

                this.setState({
                    error: err.error
                });
            });
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
                        name="mobile_number"/>
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

                    <p>{this.state.error? this.state.error : ""}</p>

                    <button type="button" onClick={this.saveNewPassengerInfo}>Save</button>
                </fieldset>
            </form>
        )
    }
}