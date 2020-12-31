import React from "react";
import Header from "./Header/Header";
import Map from "./Map/Map";
import AppContext from "../../contexts/AppContext/AppContext";

export default class Passenger extends React.Component{
    static contextType = AppContext;

    render(){
        console.log(this.context);
        return (
            <section>
                <Header/>
                <Map/>
            </section>
        );
    };
};