import React from "react";

const AppContext = React.createContext({
    mapContext: {}
});

export default AppContext;

export class AppProvider extends React.Component{
    render(){
        const value = {
            mapContext: this.props.mapContext
        };
        console.log(this.props)
        return (
            <AppContext.Provider value={value}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}