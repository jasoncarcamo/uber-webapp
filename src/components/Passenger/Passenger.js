import React from "react";
import Header from "./Header/Header";
import Map from "./Map/Map";

export default class Passenger extends React.Component{
    render(){
        return (
            <section>
                <Header/>
                <Map/>
            </section>
        );
    };
};