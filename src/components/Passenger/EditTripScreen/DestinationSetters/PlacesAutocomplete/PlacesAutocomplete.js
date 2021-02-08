import React from "react";
import PlacesAutoComplete, {geocodeByAddress, getLatLng} from "react-places-autocomplete";
import "./PlacesAutocomplete.css";

export default class PlacesAutocomplete extends React.Component{

    handleChange = (address)=>{
        let zip_code;
        this.props.editInput(address, this.props.name);

        geocodeByAddress(address)
            .then( results => {
                zip_code = results[0].address_components[7].short_name;

                return getLatLng(results[0]);
            })
            .then( latLng => {
                latLng.zip_code = zip_code;
        
                this.props.editTripLocations(this.props.name, latLng);

            })
            .catch( error => {

                console.log(error);

            });
    };

    render(){
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