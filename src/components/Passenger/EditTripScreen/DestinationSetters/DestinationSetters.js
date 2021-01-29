import React from "react";
import AppContext from "../../../../contexts/AppContext/AppContext";
import "./DestinationSetters.css";
import PlacesAutocomplete from "./PlacesAutocomplete/PlacesAutocomplete";

export default class DestinationSetters extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            trip: {}
        };
    }

    static contextType = AppContext;

    componentDidMount(){
        this.setState({
            trip: Object.assign({}, this.context.tripsContext.trip)
        });
    }

    editInput = (address, name)=>{
        const trip = this.context.tripsContext.trip;

        trip[name] = address;

        this.setState({
            trip
        });

        this.context.tripsContext.editTripInput(trip);
    };

    editTripLocations = (inputName, position)=>{
        let name = inputName.split("_");
        const location = {};

        name.splice(name.length - 1, 1);

        for(const [key, value] of Object.entries(position)){

            location[`${name.join("_")}_${key}`] = value;

        };

        this.context.tripsContext.editTripLocations(location);
    }

    render(){
        console.log(this.state.trip);
        return (
            <>  
                <label className="autocomplete-label" htmlFor="pick_up_address_input">
                    Pick up address
                    <PlacesAutocomplete id="pick_up_address_input" className="trip-settings-input" type="text" placeholder="Enter pickup location" name="pick_up_address" value={this.state.trip.pick_up_address} editInput={this.editInput} editTripLocations={this.editTripLocations}/>
                </label>
                
                <label className="autocomplete-label" htmlFor="drop_off_address_input">
                    Drop off address
                    <PlacesAutocomplete id="drop_off_address_input" className="trip-settings-input" type="text" placeholder="Where to?" name="drop_off_address" value={this.state.trip.drop_off_address} editInput={this.editInput} editTripLocations={this.editTripLocations}/>
                </label>
            </>
        );
    };
};