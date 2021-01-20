import React from "react";
import "./Header.css";
import MenuBurger from "./MenuBurger";
import AppContext from "../../../contexts/AppContext/AppContext";
import PassengerToken from "../../../services/PassengerToken/PassengerToken";

export default class Header extends React.Component{

    static contextType = AppContext

    toAbout = ()=>{
        this.props.history.push("/passenger/account");
        this.toggleMenuBurger();
    }

    signOut = ()=>{
        this.context.passengerContext.setToDefault();

        PassengerToken.removeToken()

        this.props.history.push("/");
    };

    toggleMenuBurger = (e)=>{
        const menuBurger =  document.getElementById("menu-burger-container");
        const menuContainer = document.getElementById("menu-container");

        menuContainer.classList.remove("menu-open");
        menuBurger.classList.remove("menu-burger-container-toggle");
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
                            <button onClick={this.toAbout}>Account</button>
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