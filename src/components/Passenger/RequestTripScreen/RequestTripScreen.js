import React from "react";
import Map from "../Map/Map";
import ConfirmOptions from "./ConfirmOptions/ConfirmOptions";
import AppContext from "../../../contexts/AppContext/AppContext";
import TripConfirmed from "./TripConfirmed/TripConfirmed";

export default class RequestTripScreen extends React.Component{

    static contextType = AppContext;

    renderTripConfirmed = ({tripsContext})=>{
        if(tripsContext.trip.request_confirmed){
            return <TripConfirmed history={this.props.history}/>
        };

        return "";
    }



    render(){
        return (
            <section>
                <Map mapContainerStyle={mapStyle}/>
                <ConfirmOptions history={this.props.history}/>

                {this.renderTripConfirmed(this.context)}
            </section>
        );
    };
};

const mapStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100%",
    height: "55vh",
    minHeight: "19.6em"
}