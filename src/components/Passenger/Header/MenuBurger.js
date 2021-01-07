import React from "react";
import "./MenuBurger.css";

export default class MenuBurger extends React.Component{

    toggleMenuBurger = (e)=>{
        const menuBurger =  document.getElementById("menu-burger-container");
        const menuContainer = document.getElementById("menu-container");

        menuContainer.classList.toggle("menu-open");
        menuBurger.classList.toggle("menu-burger-container-toggle");
    };

    render(){
        return (
            <button id="menu-burger-container" onClick={this.toggleMenuBurger}>
                <div className="menu-burger-line"></div>
                <div className="menu-burger-line"></div>
                <div className="menu-burger-line"></div>
            </button>
        )
    }
}