import React from "react";
import "./EditSuccess.css";

export default class EditSuccess extends React.Component{

    toggleEditAccount = ()=>{
        this.props.toggleEditAccount();
    }

    toggleEditSuccess = ()=>{
        this.props.toggleEditSuccess();
    }

    handleConfirm = ()=>{
        this.toggleEditSuccess();
        this.toggleEditAccount();
    } 

    render(){
        return (
            <section id="edit-success-section">
                <p>You have successfully edited your account</p>
                <button onClick={this.handleConfirm}>Ok</button>
            </section>
        )
    };
};