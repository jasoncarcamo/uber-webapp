import React from "react";

export default class TripSettingsScreen extends React.Component{
    render(){
        return (
            <section>
                <button>Back</button>
                
                <form>
                    <fieldset>
                        <input id="" type="text" placeholder="Enter pickup location"/>
                        <input id="" type="text" placeholder="Where to?"/>
                        <button>Looks Good</button>
                    </fieldset>
                </form>
            </section>
        );
    };
};