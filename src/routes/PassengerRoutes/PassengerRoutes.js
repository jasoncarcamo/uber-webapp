import React from "react";
import {Route} from "react-router-dom";
import Passenger from "../../components/Passenger/Passenger";

export default class PassengerRoutes extends React.Component{
    render(){
        return (
            <>
                <Route path="/passenger" component={Passenger}></Route>
            </>
        );
    };
};