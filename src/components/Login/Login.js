import React from "react";
import PassengerToken from "../../services/PassengerToken/PassengerToken";

export default class LogIn extends React.Component{
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

    handleLogin = ()=>{
        const driverTest = {
            mobile_number: 6317030168,
            password: "carcar"
        };

        fetch("http://localhost:7000/api/login-driver", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                mobile_number: driverTest.mobile_number,
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

                this.props.history.push("/passenger");
            })
            .catch( err => {

                this.setState({
                    error: err.error
                });
            });
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