import React from "react";
import AppContext from "../../../../../contexts/AppContext/AppContext";

export default class DriverInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            driver: {}
        }
    }

    static contextType = AppContext;

    componentDidMount(){

    }

    render(){
           
        return (
            <section>

            </section>
        );
    };
};