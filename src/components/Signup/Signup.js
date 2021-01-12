import React from "react";
import PassengerToken from "../../services/PassengerToken/PassengerToken";

export default class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            token: "",
            error: ""
        };
    };

    componentDidMount(){
        if(PassengerToken.hasToken()){
            this.props.history.push("/passenger");
        };
    }

    handleSignUp = ()=>{
        const testingDriverSignup = {
                first_name: "jason",
                last_name: "carcamo",
                mobile_number: "6317030168",
                email: "jasoncarcamo30@yahoo.com",
                password: "carcar",
        }

        fetch("http://localhost:7000/api/register-driver", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({
                first_name: testingDriverSignup.first_name,
                last_name: testingDriverSignup.last_name,
                mobile_number: testingDriverSignup.mobile_number,
                email: testingDriverSignup.email,
                password: testingDriverSignup.password,
                date_created: new Date()
            })
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            })
            .then( resData => {

                PassengerToken.setToken(resData.token);

                this.props.history.push("/passenger");
            })
            .catch( err => {
                this.setState({
                    error: err.error
                });
            });
    };
    
    render(){
        return (
            <section>
                <h2>Sign Up</h2>

                <p>Token: {this.state.token}</p>
                <p>Error: {this.state.error}</p>

                <button onClick={this.handleSignUp}>Sign Up</button>
            </section>
        )
    }
}