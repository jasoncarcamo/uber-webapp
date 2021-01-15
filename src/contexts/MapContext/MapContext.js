import React from "react";

const MapContext = React.createContext({
    passengerLocation: {},
    renderDirections: false,
    toggleDirections: ()=>{}
});

export default MapContext;

export class MapProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            passengerLocation: {
                lat: "",
                lng: ""
            },
            renderDirections: false
        }
    }

    componentDidMount(){
        this.watchLocation();
    };

    postionError = (error)=>{
        console.log(error);
    }

    options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maxiumAge: 0
    };

    getLocation = ()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setLocation, this.postionError, this.options);
        };
    }

    //handles positon on location change
    watchLocation = ()=>{
        if(navigator.geolocation){
            navigator.geolocation.watchPosition(this.setLocation, this.postionError, this.options);
        };
    }

    setLocation = (position)=>{
        const newPassengerLocation = {
            lat: Number(position.coords.latitude),
            lng: Number(position.coords.longitude)
        };

        this.setState({
            passengerLocation: newPassengerLocation
        });
    }

    toggleDirections = (bool)=>{
        this.setState({
            renderDirections: bool
        });
    }

    render(){
        const value = {
            passengerLocation: this.state.passengerLocation,
            renderDirections: this.state.renderDirections,
            toggleDirections: this.toggleDirections
        };

        return(
            <MapContext.Provider value={value}>
                {this.props.children}
            </MapContext.Provider>
        );
    };
};