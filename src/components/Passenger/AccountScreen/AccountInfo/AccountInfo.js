import React from "react";
import AppContext from "../../../../contexts/AppContext/AppContext";

export default class AccountInfo extends React.Component{

    static contextType = AppContext;

    toggleEditAccount = ()=>{
        this.props.toggleEditAccount();
    }

    render(){
        return (
            <section>
                <p>First name: {this.context.passengerContext.passenger.first_name}</p>
                <p>Last name: {this.context.passengerContext.passenger.last_name}</p>
                <p>Mobile number: {this.context.passengerContext.passenger.mobile_number}</p>
                <p>Email: {this.context.passengerContext.passenger.email}</p>
                <p>Home address: {this.context.passengerContext.passenger.home_address}</p>
                <p>Work address: {this.context.passengerContext.passenger.work_address}</p>
                <button onClick={this.toggleEditAccount}>Edit account</button>
            </section>
        )
    }
}