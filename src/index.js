import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import AppContext, {AppProvider} from "./contexts/AppContext/AppContext";
import MapContext, {MapProvider} from "./contexts/MapContext/MapContext";
import PassengerContext, {PassengerProvider} from "./contexts/PassengerContext/PassengerContext";
import TripsContext, {TripsProvider} from "./contexts/TripsContext/TripsContext";
import DriverContext, {DriverProvider} from "./contexts/DriverContext/DriverContext";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <PassengerProvider>
                <PassengerContext.Consumer>
                    { passengerContext => (
                        <DriverProvider>
                            <DriverContext.Consumer>
                                { driverContext => (
                                    <TripsProvider>
                                        <TripsContext.Consumer>
                                            { tripsContext => (
                                                <MapProvider>
                                                    <MapContext.Consumer>
                                                        { mapContext => (
                                                            <AppProvider
                                                                mapContext={mapContext}
                                                                passengerContext={passengerContext}
                                                                tripsContext={tripsContext}
                                                                driverContext={driverContext}>
                                                                <App/>
                                                            </AppProvider>
                                                        )}
                                                    </MapContext.Consumer>
                                                </MapProvider>
                                            )}
                                        </TripsContext.Consumer>
                                    </TripsProvider>
                                )}
                            </DriverContext.Consumer>
                        </DriverProvider>
                    )}
                </PassengerContext.Consumer>
            </PassengerProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
