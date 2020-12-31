import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import AppContext, {AppProvider} from "./contexts/AppContext/AppContext";
import MapContext, {MapProvider} from "./contexts/MapContext/MapContext";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <MapProvider>
                <MapContext.Consumer>
                    { mapContext => (
                        <AppProvider
                            mapContext={mapContext}>
                            <App/>
                        </AppProvider>
                    )}
                </MapContext.Consumer>
            </MapProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
