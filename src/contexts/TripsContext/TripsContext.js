import React from "react";

const TripsContext = React.createContext({
    trip: {},
    editTripInput: ()=>{},
    editTripLocations: ()=>{},
    cancelTrip: ()=>{}
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
                scheduled_datetime: new Date(),
                request_confirmed: false
            }
        };
    };

    editTripInput = ({target})=>{
        const editTrip = this.state.trip;

        editTrip[target.name] = target.value;

        this.setState({
            trip: editTrip
        });
    }

    editTripLocations = (location)=>{
        const trip = this.state.trip;

        for(const [key, value] of Object.entries(location)){
            trip[key] = value;
        };

        this.setState({
            trip
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
                scheduled_datetime: new Date(),
                request_confirmed: false
            }
        });
    }
    
    render(){
        const value = {
            trip: this.state.trip,
            editTripInput: this.editTripInput,
            editTripLocations: this.editTripLocations,
            cancelTrip: this.cancelTrip
        };
        
        return (
            <TripsContext.Provider value={value}>
                {this.props.children}
            </TripsContext.Provider>
        );
    };
};