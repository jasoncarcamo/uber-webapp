import React from "react";
import LocationService from "../../services/LocationServices/LocationServices";
import LocationServices from "../../services/LocationServices/LocationServices";

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
        this.getLocation();
    };

    getLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{
                console.log(position);

                this.setLocation(position);
            });
        };
    }

    setLocation = (position)=>{
        const newPassengerLocation = {
            lat: Number(position.coords.latitude),
            lng: Number(position.coords.longitude)
        };

        this.setState({
            passengerLocation: newPassengerLocation
        })
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