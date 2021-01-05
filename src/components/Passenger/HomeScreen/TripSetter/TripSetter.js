import React from "react";

export default class TripSetter extends React.Component{
    render(){
        return (
            <section>
                <input id="" type="text" placeholder="Where to?" onClick={()=>this.props.history.push("/passenger/trip/edit")}/>
                <button>Now</button>
            </section>
        );
    };
};