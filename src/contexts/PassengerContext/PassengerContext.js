import React from "react";
import PassengerToken from "../../services/PassengerToken/PassengerToken";

const PassengerContext = React.createContext({
    passenger: {},
    getPassenger: ()=>{},
    setPassenger: ()=>{},
    editPassenger: ()=>{},
    setToDefault: ()=>{}
});

export default PassengerContext;

export class PassengerProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            passenger: {},
            error: ""
        };
    };

    componentDidMount(){
        if(PassengerToken.hasToken()){
            this.getPassenger();
        };
    }

    getPassenger = ()=>{
        fetch("http://localhost:7000/api/passenger-info", {
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
                console.log(resData)
                this.setPassenger(resData.passenger);
            })
            .catch( err => {
                this.setState({
                    error: err.error
                });
            });
    }

    setPassenger = (passenger)=>{
        this.setState({
            passenger
        });
    }

    editPassenger = (passenger)=>{
        this.setPassenger(passenger);
    }

    setToDefault = ()=>{
        const passenger = {};

        this.setPassenger(passenger);
    }

    render(){
        const value = {
            passenger: this.state.passenger,
            getPassenger: this.getPassenger,
            setPassenger: this.setPassenger,
            editPassenger: this.editPassenger,
            setToDefault: this.setToDefault
        };
        console.log(this.state.passenger)
        return (
            <PassengerContext.Provider value={value}>
                {this.props.children}
            </PassengerContext.Provider>
        );
    };
};