import React from "react";

const TripsContext = React.createContext({
    trip: {}
});

export default TripsContext;

export class TripsProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            trip: {}
        };
    };
    
    render(){
        const value = {
            trip: this.state.trip
        };

        return (
            <TripsContext.Provider value={value}>
                {this.props.children}
            </TripsContext.Provider>
        );
    };
};