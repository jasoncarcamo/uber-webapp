import React from "react";

export default class Header extends React.Component{
    render(){
        return (
            <header>
                <h2>Uber Driver</h2>
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