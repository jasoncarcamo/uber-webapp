import React from "react";
import "./TripInfoContainer.css";
import AppContext from "../../../../contexts/AppContext/AppContext";
import TripInfo from "./TripInfo/TripInfo";
import CancelTrip from "./CancelTrip/CancelTrip";

export default class TripInfoContainer extends React.Component{

    static contextType = AppContext;

    componentDidMount(){
        this.displayInfoSection();
    }

    displayInfoSection = ()=>{
        const info = document.getElementById("drag-bar");
        const mainTripSection = document.getElementById('main-trip-info-section');

        // for mouse enabled devices
        info.addEventListener("click", (e)=>{
            console.log(e.clientY)
            mainTripSection.classList.toggle("open-info-section");
        });
    }

    render(){
        return (
            <section id="main-trip-info-section">
                <div id="drag-bar">---------</div>

                <TripInfo/>

                <CancelTrip history={this.props.history}/>
            </section>
        );
    };
};
