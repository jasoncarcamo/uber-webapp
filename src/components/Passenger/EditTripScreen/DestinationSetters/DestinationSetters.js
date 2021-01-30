import React from "react";
import AppContext from "../../../../contexts/AppContext/AppContext";
import "./DestinationSetters.css";
import PlacesAutocomplete from "./PlacesAutocomplete/PlacesAutocomplete";
import {geocodeByAddress, getLatLng} from "react-places-autocomplete";

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

    getPosition = (address, propName)=>{
        console.log(address, propName)
        geocodeByAddress(address)
            .then( results => getLatLng(results[0]))
            .then( latLng => {   
                console.log(latLng)    
                this.editTripContextLocation(latLng, propName);
            })
            .catch( error => {
                console.log(error);
            });
    };

    editTripContextLocation = (latLng, propName)=>{
        let name = propName.split("_");
        let position = latLng;
        const location = {};

        name.splice(name.length - 1, 1);

        for(const [key, value] of Object.entries(position)){

            location[`${name.join("_")}_${key}`] = value;

        };

        console.log(location);

        this.context.tripsContext.editTripLocations(location);
    }

    goToAccount = ()=>{
        this.props.history.push("/passenger/account")
    }

    setPickUpHome = (e)=>{
        const trip = this.context.tripsContext.trip;
        const passenger = this.context.passengerContext.passenger;

        e.preventDefault();

        trip.pick_up_address = passenger.home_address;

        this.getPosition(trip.pick_up_address, "pick_up_address");

        this.setState({
            trip
        });

        this.context.tripsContext.editTripInput(trip);
    }

    setDropOffHome = (e)=>{
        const trip = this.context.tripsContext.trip;
        const passenger = this.context.passengerContext.passenger;

        e.preventDefault();

        trip.drop_off_address = passenger.home_address;

        this.getPosition(trip.drop_off_address, "drop_off_address");

        this.setState({
            trip
        });

        this.context.tripsContext.editTripInput(trip);
    }

    renderPickUpHome = ()=>{
        const passenger = this.context.passengerContext.passenger;

        if(passenger.home_address){
            return <button type="button" onClick={this.setPickUpHome}>Pick up at home</button>;
        } else{
            return <button type="button" onClick={this.goToAccount}>Set home address</button>;
        };
    }

    renderDropOffHome = ()=>{
        const passenger = this.context.passengerContext.passenger;

        if(passenger.home_address){
            return <button type="button" onClick={this.setDropOffHome}>Drop off at home</button>;
        } else{
            return <button type="button" onClick={this.goToAccount}>Set home address</button>;
        };
    }

    render(){
        console.log(this.state.trip);
        return (
            <>  
                <div>
                    <label className="autocomplete-label" htmlFor="pick_up_address_input">
                        Pick up address
                        <PlacesAutocomplete id="pick_up_address_input" className="trip-settings-input" type="text" placeholder="Enter pickup location" name="pick_up_address" value={this.state.trip.pick_up_address} editInput={this.editInput} editTripLocations={this.editTripLocations}/>

                        {this.renderPickUpHome()}
                    </label>
                </div>
                
                <div>
                    <label className="autocomplete-label" htmlFor="drop_off_address_input">
                        Drop off address
                        <PlacesAutocomplete id="drop_off_address_input" className="trip-settings-input" type="text" placeholder="Where to?" name="drop_off_address" value={this.state.trip.drop_off_address} editInput={this.editInput} editTripLocations={this.editTripLocations}/>

                        {this.renderDropOffHome()}
                    </label>
                </div>
            </>
        );
    };
};