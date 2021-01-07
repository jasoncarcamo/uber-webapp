import React from "react";

const PassengerContext = React.createContext({
    passenger: {}
});

export default class PassengerProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            passenger: {}
        };
    };

    render(){
        const value = {
            passenger: this.state.passenger
        };

        return (
            <PassengerContext.Provider value={value}>
                {this.props.children}
            </PassengerContext.Provider>
        );
    };
};