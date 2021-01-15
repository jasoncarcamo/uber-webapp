import React from "react";
import "./Header.css";
import MenuBurger from "./MenuBurger";
import AppContext from "../../../contexts/AppContext/AppContext";
import PassengerToken from "../../../services/PassengerToken/PassengerToken";

export default class Header extends React.Component{

    static contextType = AppContext

    signOut = ()=>{
        this.context.passengerContext.setToDefault();

        PassengerToken.removeToken()

        this.props.history.push("/");
    };

    render(){
        return (
            <header id="menu-container">
                <MenuBurger/>

                <h2>Uber Passenger</h2>

                <nav>
                    <ul>
                        <li>
                            <button>Home</button>
                        </li>
                        <li>
                            <button>Account</button>
                        </li>
                        <li>
                            <button onClick={this.signOut}>Sign Out</button>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    };
}