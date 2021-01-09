import React from "react";
import Header from "./Header/Header";
import AppContext from "../../contexts/AppContext/AppContext";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import ConfrimTripScreen from "./ConfirmTripScreen/ConfirmTripScreen";

export default class Passenger extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            HomeScreen: true,
            searchAddress: false
        };
    }
    static contextType = AppContext;

    render(){
        console.log(this.context);
        return (
            <section>
                <Route path="/passenger" component={Header}></Route>

                <Route exact path="/passenger" component={HomeScreen}></Route>
                <Route exact path="/passenger/confirm_trip" component={ConfrimTripScreen}></Route>
            </section>
        );
    };
};