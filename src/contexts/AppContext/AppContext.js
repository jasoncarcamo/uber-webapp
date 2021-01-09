import React from "react";

const AppContext = React.createContext({
    mapContext: {},
    tripsContext: {}
});

export default AppContext;

export class AppProvider extends React.Component{
    render(){
        const value = {
            mapContext: this.props.mapContext,
            tripsContext: this.props.tripsContext
        };

        console.log(this.props)
        return (
            <AppContext.Provider value={value}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}