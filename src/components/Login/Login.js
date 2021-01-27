import React from "react";
import PassengerToken from "../../services/PassengerToken/PassengerToken";
import AppContext from "../../contexts/AppContext/AppContext";

export default class LogIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            token: "",
            error: ""
        };
    };

    static contextType = AppContext;

    componentDidMount(){
        if(PassengerToken.hasToken()){
            this.props.history.push("/passenger");
        };
    }

    handleLogin = ()=>{
        const driverTest = {
            email: "jasoncarcamo30@yahoo.com",
            password: "carcar"
        };

        fetch("http://localhost:7000/api/login-passenger", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email: driverTest.email,
                password: driverTest.password
            })
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            })
            .then( resData => {
                this.setState({
                    token: resData.token
                });

                PassengerToken.setToken(resData.token);

                this.setPassenger(resData.dbPassenger);

                this.props.history.push("/passenger");
            })
            .catch( err => {

                this.setState({
                    error: err.error
                });
            });
    }

    setPassenger = (passenger)=>{
        this.context.passengerContext.setPassenger(passenger);
    }

    render(){
        return (
            <section>
                <h2>Log In</h2>
                <p>Token: {this.state.token}</p>
                <p>Error: {this.state.error}</p>

                <button onClick={this.handleLogin}>Log In</button>
            </section>
        );
    };
};