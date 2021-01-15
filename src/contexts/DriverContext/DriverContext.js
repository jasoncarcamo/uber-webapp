import React from "react";

const DriverContext = React.createContext({
    driver: {}
});

export default DriverContext;

export class DriverProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            driver: {}
        };
    };

    render(){
        const value = {
            driver: this.state.driver
        };

        return (
            <DriverContext.Provider value={value}>
                {this.props.children}
            </DriverContext.Provider>
        )
    };
};