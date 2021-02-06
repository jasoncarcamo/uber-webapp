import React from "react";
import AppContext from "../../../../../contexts/AppContext/AppContext";

export default class TripInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            trip: {}
        }
    }

    static contextType = AppContext;

    componentDidMount(){
        const trip = this.context.tripsContext.trip;

        this.setState({
            trip
        });
    }
    
    render(){
        return (
            <section id="">
                <p>Pick up address: {this.context.tripsContext.trip.pick_up_address}</p>
                <p>Drop off address: {this.context.tripsContext.trip.drop_off_address}</p>
                <p>Distance: {this.context.tripsContext.trip.distance}</p>
                <p>Estmated time: {this.context.tripsContext.trip.duration}</p>
                <p>Price: {this.context.tripsContext.trip.price}</p>
            </section>
        );
    };
};