import React from "react";
import PlacesAutoComplete, {geocodeByAddress, getLatLng} from "react-places-autocomplete";

export default class PlacesAutocomplete extends React.Component{

    handleChange = (address)=>{

        this.props.editInput(address, this.props.name);

        geocodeByAddress(address)
            .then( results => getLatLng(results[0]))
            .then( latLng => {
                
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
                <div>
                    <input
                    {...getInputProps({
                        placeholder: 'Search Places ...',
                        className: 'location-search-input'
                    })}
                    />
                    <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                        const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                        // inline style for demonstration purpose
                        const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                        <div
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