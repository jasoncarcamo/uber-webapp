import React from "react";

const TripsContext = React.createContext({
    trip: {},
    editTripInput: ()=>{}
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
                pick_up_lat: "",
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
    
    render(){
        const value = {
            trip: this.state.trip,
            editTripInput: this.editTripInput
        };
        console.log(this.state.trip.scheduled_datetime)
        return (
            <TripsContext.Provider value={value}>
                {this.props.children}
            </TripsContext.Provider>
        );
    };
};