import React from "react";
import {Route} from "react-router-dom";
import LogIn from "../../components/LogIn/LogIn";
import SignUp from "../../components/Signup/Signup";

export default class AuthorizationRoutes extends React.Component{
    render(){
        return (
            <>
                <Route exact path="/login" component={LogIn}></Route>
                <Route exact path="/signup" component={SignUp}></Route>
            </>
        );
    };
};