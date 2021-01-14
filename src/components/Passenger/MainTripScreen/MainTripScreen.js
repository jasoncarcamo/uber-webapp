import React from "react";
import Map from "../Map/Map";
import AppContext from "../../../contexts/AppContext/AppContext";

export default class MainTripScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            request_confirmed: false
        };
    };

    static contextType = AppContext;

    editTripByKey = (key, value)=>{
        this.context.tripsContext.editTripByKey(key, value);
        this.setState({
            request_confirmed: true
        });
    }

    render(){
        return (
            <section>
                <Map mapContainerStyle={mapContainerStyle}/>
            </section>
        );
    };
};

const mapContainerStyle = {
    width: "100%",
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1
};