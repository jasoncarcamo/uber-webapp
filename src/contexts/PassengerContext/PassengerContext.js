import React from "react";

const PassengerContext = React.createContext({
    passenger: {},
    setPassenger: ()=>{},
    editPassenger: ()=>{},
    setToDefault: ()=>{}
});

export default PassengerContext;

export class PassengerProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            passenger: {}
        };
    };

    setPassenger = (passenger)=>{
        this.setState({
            passenger
        });
    }

    editPassenger = (passenger)=>{
        this.setPassenger(passenger);
    }

    setToDefault = ()=>{
        this.setState({
            passenger: {}
        });
    }

    render(){
        const value = {
            passenger: this.state.passenger,
            setPassenger: this.setPassenger,
            editPassenger: this.editPassenger,
            setToDefault: this.setToDefault
        };

        return (
            <PassengerContext.Provider value={value}>
                {this.props.children}
            </PassengerContext.Provider>
        );
    };
};