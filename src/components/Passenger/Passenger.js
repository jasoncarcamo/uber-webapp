import React from "react";
import Header from "./Header/Header";
import AppContext from "../../contexts/AppContext/AppContext";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import RequestTripScreen from "./RequestTripScreen/RequestTripScreen";
import TripConfirmedScreen from "./TripConfirmedScreen/TripConfirmedScreen";

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
                <Route exact path="/passenger/request_trip" component={RequestTripScreen}></Route>
                <Route exact path="/passenger/trip_confirmed" component={TripConfirmedScreen}></Route>
            </section>
        );
    };
};