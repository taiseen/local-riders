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

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Components/FireBase/FireBaseConfig';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import CreateAccount from './Components/LoginSystem/CreateAccount/CreateAccount';
import LoginPage from './Components/LoginSystem/LoginPage/LoginPage';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}


// 11-March-2021
// after finish ==>> attach output-ui
// Last focus on README file...

export const UserContext = createContext();

const App = () => {

    const [loginUser, setLoginUser] = useState({});

    // PrivateRoute
    return (

        <UserContext.Provider value={[loginUser, setLoginUser]}>

            <Router>

                <Header />

                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>

                    <Route path="/destination/:vehicleType">
                        <Destination/>
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