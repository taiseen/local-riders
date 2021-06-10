import React, { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import GoTo from './Components/GoTo';
import Home from './Components/Home';
import Header from './Components/Header';
import Destination from './Components/Destination';
import PrivateRoute from './Components/PrivateRoute';
import PageNotFound from './Components/PageNotFound';
import LoginAccount from './Components/LoginSystem/LoginAccount/LoginAccount';
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