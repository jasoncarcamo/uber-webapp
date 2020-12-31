import React from "react";
import "./Header.css";
import MenuBurger from "./MenuBurger";

export default class Header extends React.Component{
    render(){
        return (
            <header id="menu-container">
                <MenuBurger/>
                
                <h2>Uber Passenger</h2>

                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Account</li>
                    </ul>
                </nav>
            </header>
        );
    };
}