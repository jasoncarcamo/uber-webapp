import React from "react";
import {Link} from "react-router-dom";

export default class LandingPage extends React.Component{
    render(){
        return (
            <section>
                <h1>Welcome, book a trip!</h1>
                
                <ul>
                    <li>
                        <Link to="/login">Log In</Link>
                    </li>

                    <li>
                        <Link to="signup">Sign Up</Link>
                    </li>
                </ul>
            </section>
        );
    };
};