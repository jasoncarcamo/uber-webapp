import React from "react";

const AppContext = React.createContext({
    mapContext: {},
    tripsContext: {},
    driverContext: {}
});

export default AppContext;

export class AppProvider extends React.Component{
    render(){
        const value = {
            mapContext: this.props.mapContext,
            tripsContext: this.props.tripsContext,
            driverContext: this.props.driverContext,
            passengerContext: this.props.passengerContext
        };
        
        return (
            <AppContext.Provider value={value}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}