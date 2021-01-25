import React from "react";

export default class EditSuccess extends React.Component{

    toggleEditAccount = ()=>{
        this.props.toggleEditAccount();
    }

    toggleEditSuccess = ()=>{
        this.props.toggleEditSuccess();
    }

    handleConfirm = ()=>{
        this.toggleEditAccount();
        this.toggleEditSuccess();
    } 

    render(){
        return (
            <section>
                <p>You have successfully edited your account</p>
                <button onClick={this.toggleEditAccount}>Ok</button>
            </section>
        )
    };
};