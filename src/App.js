import React, { createContext, useState } from 'react';
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
import CreateAccount from './Components/LoginSystem/CreateAccount/CreateAccount';
import LoginPage from './Components/LoginSystem/LoginPage/LoginPage';
import GoTo from './Components/GoTo/GoTo';


export const UserContext = createContext();

const App = () => {

    const [loginUser, setLoginUser] = useState({});

    return (

        <UserContext.Provider value={[loginUser, setLoginUser]}>

            <Router>

                <Header />

                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>

                    <PrivateRoute path="/destination/:vehicleType">
                        <Destination/>
                    </PrivateRoute>

                    <PrivateRoute path="/goto/:vehicleID">
                        <GoTo/>
                    </PrivateRoute>

                    <Route path="/createAccount">
                        <CreateAccount/>
                    </Route>

                    <Route path="/login">
                        <LoginPage/>
                    </Route>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
};

export default App;