import React, { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Destination from './Components/Destination/Destination';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import LoginAccount from './Components/LoginSystem/LoginAccount/LoginAccount';
import GoTo from './Components/GoTo/GoTo';
import VehicleContextProvider from './Components/ContextAPI/VehicleContext';
import UserLoginContextProvider from './Components/ContextAPI/UserLoginContext';

export const UserContext = createContext();

const App = () => {

    return (
        <VehicleContextProvider>
            <UserLoginContextProvider>

                <Router>

                    <Header />

                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>

                        <PrivateRoute path="/destination/:vehicleID">
                            <Destination />
                        </PrivateRoute>

                        <PrivateRoute path="/goto/:vehicleID">
                            <GoTo />
                        </PrivateRoute>

                        <Route path="/loginAccount">
                            <LoginAccount />
                        </Route>

                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route path="/*">
                            <PageNotFound />
                        </Route>
                    </Switch>
                </Router>
            </UserLoginContextProvider>
        </VehicleContextProvider>
    );
};

export default App;