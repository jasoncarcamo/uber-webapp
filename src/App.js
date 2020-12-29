import logo from './logo.svg';
import './App.css';
import LandingPage from "./components/LandingPage/LandingPage";
import LogIn from "./components/Login/Login";
import SignUp from "./components/Signup/Signup";
import Map from "./components/Map/Map";
import {Route} from "react-router-dom";

function App() {
    return (
        <>
            <main>
                <Route exact path="/" component={LandingPage}></Route>

                <Route exact path="/login" component={LogIn}></Route>
                <Route exact path="/signup" component={SignUp}></Route>

                
            </main>
        </>
    );
};

export default App;
