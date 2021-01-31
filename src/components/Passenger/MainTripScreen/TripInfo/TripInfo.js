import React from "react";
import "./TripInfo.css";
import AppContext from "../../../../contexts/AppContext/AppContext";
import CancelTrip from "./CancelTrip/CancelTrip";

export default class TripInfo extends React.Component{

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

                
                <section id="">
                    <p>Pick up address: {this.context.tripsContext.trip.pick_up_address}</p>
                    <p>Drop off address: {this.context.tripsContext.trip.drop_off_address}</p>
                    <p>Distance: {this.context.tripsContext.trip.distance}</p>
                    <p>Estmated time: {this.context.tripsContext.trip.duration}</p>
                    <p>Price: {this.context.tripsContext.trip.price}</p>
                </section>

                <CancelTrip history={this.props.history}/>
            </section>
        );
    };
};
