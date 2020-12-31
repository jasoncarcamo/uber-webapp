import logo from './logo.svg';
import './App.css';
import LandingPage from "./components/LandingPage/LandingPage";
import {Route} from "react-router-dom";
import PassengerToken from "./services/PassengerToken/PassengerToken";
import AuthorizationRoutes from "./routes/AuthorizationRoutes/AuthorizationRoutes";

function App() {
    return (
        <>
            <main>
                <Route exact path="/" component={LandingPage}></Route>

                {!PassengerToken.hasToken() ? <AuthorizationRoutes/> : ""}

                
            </main>
        </>
    );
};

export default App;
