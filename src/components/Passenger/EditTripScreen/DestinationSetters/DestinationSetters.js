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

        console.log(location);

        this.context.tripsContext.editTripLocations(location);
    }

    getPosition = (address, propName)=>{
        let zip_code;
        console.log(address, propName)
        geocodeByAddress(address)
            .then( results => {
                let length = results[0].address_components.length;

                 if(length >= 9){
                     length -= 1;
                 };
                
                zip_code = results[0].address_components[length - 1].long_name;

                return getLatLng(results[0]);
            })
            .then( latLng => {   
                latLng.zip_code = zip_code;

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

    setPickUpWork = (e)=>{
        const trip = this.context.tripsContext.trip;
        const passenger = this.context.passengerContext.passenger;

        e.preventDefault();

        trip.pick_up_address = passenger.work_address;

        this.getPosition(trip.pick_up_address, "pick_up_address");

        this.setState({
            trip
        });

        this.context.tripsContext.editTripInput(trip);
    }

    setDropOffWork = (e)=>{
        const trip = this.context.tripsContext.trip;
        const passenger = this.context.passengerContext.passenger;

        e.preventDefault();

        trip.drop_off_address = passenger.work_address;

        this.getPosition(trip.drop_off_address, "drop_off_address");

        this.setState({
            trip
        });

        this.context.tripsContext.editTripInput(trip);
    }

    renderPickUpWork = ()=>{
        const passenger = this.context.passengerContext.passenger;

        if(passenger.work_address){
            return <button type="button" onClick={this.setPickUpWork}>Pick up at work</button>;
        } else{
            return <button type="button" onClick={this.goToAccount}>Set work address</button>;
        };
    }

    renderDropOffWork = ()=>{
        const passenger = this.context.passengerContext.passenger;

        if(passenger.work_address){
            return <button type="button" onClick={this.setDropOffWork}>Drop off at work</button>;
        } else{
            return <button type="button" onClick={this.goToAccount}>Set work address</button>;
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
                        {this.renderPickUpWork()}
                    </label>
                </div>
                
                <div>
                    <label className="autocomplete-label" htmlFor="drop_off_address_input">
                        Drop off address
                        <PlacesAutocomplete id="drop_off_address_input" className="trip-settings-input" type="text" placeholder="Where to?" name="drop_off_address" value={this.state.trip.drop_off_address} editInput={this.editInput} editTripLocations={this.editTripLocations}/>

                        {this.renderDropOffHome()}
                        {this.renderDropOffWork()}
                    </label>
                </div>
            </>
        );
    };
};