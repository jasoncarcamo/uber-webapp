import React from "react";

const MapContext = React.createContext({
    passengerLocation: {}
});

export default MapContext;

export class MapProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            passengerLocation: {
                lat: "",
                lng: ""
            }
        }
    }

    componentDidMount(){
        this.watchLocation();
    };

    positionSuccess = (position)=>{
        this.setLocation(position);
    }

    postionError = (error)=>{
        console.log(error);
    }

    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maxiumAge: 0
    };

    getLocation = ()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.positionSuccess, this.postionError, this.options);
        };
    }

    //handles positon on location change
    watchLocation = ()=>{
        if(navigator.geolocation){
            navigator.geolocation.watchPosition(this.positionSuccess, this.postionError, this.options);
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

    render(){
        const value = {
            passengerLocation: this.state.passengerLocation
        };

        return(
            <MapContext.Provider value={value}>
                {this.props.children}
            </MapContext.Provider>
        );
    };
};