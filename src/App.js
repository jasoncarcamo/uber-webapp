import './App.css';
import LandingPage from "./components/LandingPage/LandingPage";
import {Route} from "react-router-dom";
import PassengerToken from "./services/PassengerToken/PassengerToken";
import AuthorizationRoutes from "./routes/AuthorizationRoutes/AuthorizationRoutes";
import PassengerRoutes from "./routes/PassengerRoutes/PassengerRoutes";

function App() {
    return (
        <>
            <main>
                <Route exact path="/" component={LandingPage}></Route>

                <AuthorizationRoutes/>

                <PassengerRoutes/>
            </main>
        </>
    );
};

export default App;
