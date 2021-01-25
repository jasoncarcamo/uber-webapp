import React from "react";
import "./AccountScreen.css";
import AppContext from "../../../contexts/AppContext/AppContext";
import AccountInfo from "./AccountInfo/AccountInfo";
import EditAccount from "./EditAccount/EditAccount";
import EditSuccess from "./EditSuccess/EditSuccess";

export default class AccountScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editAccount: false,
            editSuccess: false
        }
    }

    static contextType = AppContext;

    toggleEditAccount = ()=>{
        this.setState({
            editAccount: !this.state.editAccount
        });
    }

    toggleEditSuccess = ()=>{
        this.setState({
            editSuccess: !this.state.editSuccess
        });
    }

    render(){
        return (
            <section id="passenger-account-screen-section">
                {!this.state.editAccount ? <AccountInfo toggleEditAccount={this.toggleEditAccount}/> : ""}
                {this.state.editAccount ? <EditAccount toggleEditAccount={this.toggleEditAccount} toggleEditSuccess={this.toggleEditSuccess}/> : ""}
                {this.state.editAccount && this.state.editSuccess ? <EditSuccess toggleEditAccount={this.toggleEditAccount} toggleEditSuccess={this.toggleEditSuccess}/> : ""}
            </section>
        );
    };
};