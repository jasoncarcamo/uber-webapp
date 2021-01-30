import React from "react";
import PlacesAutoComplete, {geocodeByAddress, getLatLng} from "react-places-autocomplete";
import "./PlacesAutocomplete.css";
import AppContext from "../../../contexts/AppContext/AppContext";

export default class PlacesAutocomplete extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    static contextType = AppContext;

    handleChange = (address)=>{

        this.props.editInput(address, this.props.name);

        geocodeByAddress(address)
            .then( results => getLatLng(results[0]))
            .then( latLng => {       
                this.editTripContextLocation(latLng);
            })
            .catch( error => {
                console.log(error);
            });
    };

    editTripContextLocation = (latLng)=>{
        let name = this.props.name.split("_");
        let position = latLng;
        const location = {};

        name.splice(name.length - 1, 1);

        for(const [key, value] of Object.entries(position)){

            location[`${name.join("_")}_${key}`] = value;

        };

        console.log(location);

        this.context.tripsContext.editTripLocations(location);
    }

    render(){
        console.log(this.context)
        return (
            <PlacesAutoComplete
                name={this.props.name}
                value={this.props.value}
                onChange={this.handleChange}
                onSelect={this.handleChange}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className="autocomplete-container">
                    <input
                    id={this.props.id}
                    {...getInputProps({
                        placeholder: 'Search Places ...',
                        className: 'location-search-input'
                    })}
                    />
                    <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map( (suggestion, key) => {
                        const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                        // inline style for demonstration purpose
                        const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                        <div
                            key={key}
                            {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                            })}
                        >
                            <span>{suggestion.description}</span>
                        </div>
                        );
                    })}
                    </div>
                </div>
                )}
            </PlacesAutoComplete>
        );
    };
};