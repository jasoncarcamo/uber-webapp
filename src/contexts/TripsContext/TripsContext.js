import React from "react";

const TripsContext = React.createContext({
    trip: {},
    error: "",
    editTripInput: ()=>{},
    editTripLocations: ()=>{},
    editTrip: ()=>{},
    cancelTrip: ()=>{},
    setError: ()=>{}
});

export default TripsContext;

export class TripsProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            trip: {
                pick_up_address: "",
                drop_off_address: "",
                pick_up_lat: "",
                pick_up_lng: "",
                drop_off_lat: "",
                drop_off_lng: "",
                distance: "",
                duration: "",
                scheduled_date_time: "",
                request_confirmed: false,
                driver_accepted: ""
            },
            error: ""
        };
    };

    editTripInput = (newTrip)=>{
        
        this.setState({
            trip: newTrip,
            error: ""
        });
    }

    editTripLocations = (location)=>{
        const trip = this.state.trip;

        for(const [key, value] of Object.entries(location)){
            trip[key] = value;
        };

        this.setState({
            trip,
            error: ""
        });
    }

    cancelTrip = ()=>{
        this.setState({
            trip: {
                pick_up_address: "",
                drop_off_address: "",
                pick_up_lat: "",
                pick_up_lng: "",
                drop_off_lat: "",
                drop_off_lng: "",
                distance: "",
                duration: "",
                scheduled_date_time: "",
                request_confirmed: false,
                driver_accepted: ""
            },
            error: ""
        });
    }

    editDestinationInfo = (response)=>{
        const trip = this.state.trip;

        if(!response){
            return;
        }

        trip.distance = response.routes[0].legs[0].distance.text;
        trip.duration = response.routes[0].legs[0].duration.text;
        trip.price = this.calculatePrice(trip.distance);

        this.editTrip(trip);
    }

    calculatePrice = (distance)=>{
        let newDistance = Number(distance.split(" ")[0]);
        let price = 6 + ( newDistance - 2);

        if(!distance){
            return "";
        };

        price = `$${Math.ceil(price)}`;

        return price;
    }

    editTrip = (trip)=>{
        this.setState({
            trip
        });
    }

    setError = (error)=>{
        this.setState({
            error
        });
    }
    
    render(){
        const value = {
            trip: this.state.trip,
            error: this.state.error,
            editTripInput: this.editTripInput,
            editTripLocations: this.editTripLocations,
            editTrip: this.editTrip,
            cancelTrip: this.cancelTrip,
            editDestinationInfo: this.editDestinationInfo,
            setError: this.setError
        };
        console.log(this.state.trip)
        return (
            <TripsContext.Provider value={value}>
                {this.props.children}
            </TripsContext.Provider>
        );
    };
};