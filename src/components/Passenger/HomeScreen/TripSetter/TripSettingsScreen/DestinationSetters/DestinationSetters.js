import React from "react";
import AppContext from "../../../../../../contexts/AppContext/AppContext";
import "./DestinationSetters.css";
import PlacesAutocomplete from "./PlacesAutocomplete/PlacesAutoComplete";

export default class DestinationSetters extends React.Component{

    static contextType = AppContext;

    editInput = (address, name)=>{

        const event = {
            target: {
                value: address,
                name
            }
        };

        this.context.tripsContext.editTripInput(event);
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
        return (
            <>  
                <PlacesAutocomplete className="trip-settings-input" type="text" placeholder="Enter pickup location" name="pick_up_address" value={this.context.tripsContext.trip.pick_up_address} editInput={this.editInput} editTripLocations={this.editTripLocations}/>
                <PlacesAutocomplete className="trip-settings-input" type="text" placeholder="Where to?" name="drop_off_address" value={this.context.tripsContext.trip.drop_off_address} editInput={this.editInput} editTripLocations={this.editTripLocations}/>
            </>
        );
    };
};