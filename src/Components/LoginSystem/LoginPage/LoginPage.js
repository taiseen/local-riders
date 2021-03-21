import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';

import '../CreateAccount/CreateAccount.css'

import facebook from '../../../img/facebook.png'
import google from '../../../img/google.png'
import github from '../../../img/github.png'
import { faceBookLogin, gitHubLogin, googleLogin, initLoginFrameWork, logInWithEmailAndPassword, logOut } from '../FireBaseLogin/FireBaseLoginManager';
import { Link, useHistory, useLocation } from 'react-router-dom';


const LoginPage = () => {

    // private routing purpose......
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loginUser, setLoginUser] = useContext(UserContext);

    const [user, setUser] = useState({
        isLogin: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        userSuccess: false,
        userError: ''
    });

    initLoginFrameWork();

    // user input area conditions
    //##################################
    const handleUserInput = (event) => {

        let isFormValid = true;

        if (event.target.name === "email") {
            isFormValid = /\S+@\S+.\S+/.test(event.target.value);
        }

        if (event.target.name === "password") {
            const passwordLength = event.target.value.length > 6;
            const passwordNumber = /\d{1}/.test(event.target.value);
            isFormValid = passwordLength && passwordNumber;
        }

        if (isFormValid) {
            let updateUserInfo = { ...user };
            updateUserInfo[event.target.name] = event.target.value;

            // Locally store 
            setUser(updateUserInfo)

            // Globally store | Context API
            setLoginUser(updateUserInfo)
        }

    }


    // user submit button press conditions
    // these data send to Google Firebase For Login
    //####################################
    const onSubmitFunction = (event) => {
        event.preventDefault();
        if (user.email && user.password) {
            logInWithEmailAndPassword(user.email, user.password)
                .then(res => {

                    const { displayName } = res;

                    const newUser = { ...user };

                    newUser.isLogin = true;
                    newUser.name = displayName;

                    setUser(newUser);
                    console.log("===================================", newUser);


                    setLoginUser(res);
                    // private routing purpose......
                    history.replace(from)
                })
        }

        console.log("Local ==> ", user);
        console.log("Context API ==> ", loginUser);
        console.log('loginFunction OK');
    }


    const handleFacebookLogin = () => {
        console.log('fb ==== Login Page ');
        faceBookLogin()
            .then(res => {
                // pass to context api for global access
                setLoginUser(res);
                history.replace(from);
                console.log("FB => ", loginUser);
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                // pass to context api for global access
                const { displayName } = res;

                const newUser = { ...user };

                newUser.isLogin = true;
                newUser.name = displayName;

                setUser(newUser);
                console.log("===================================", newUser);

                // Context API
                setLoginUser(res);

                //For Private Route
                history.replace(from);
            })
    }

    const handleGitHubLogin = () => {
        console.log('git ==== Login Page');
        gitHubLogin()
            .then(res => {
                // pass to context api for global access
                setLoginUser(res);
                history.replace(from);
                console.log("Git => ", loginUser);
            })
    }

    console.log(user.isLogin);

    const userLogOut = () => {
        console.log('log out.......');
        logOut()
            .then(res => {
                const logOutUser = {
                    name : '',
                    email : '',
                }

                setLoginUser(logOutUser)
            })
    }

    return (
        <div>
            <div className="login_area">
                <h3>Login</h3>
                <form onSubmit={onSubmitFunction}>
                    <input type="text" name="email" placeholder="Email" onBlur={handleUserInput} required />
                    <input type="password" name="password" placeholder="Password" onBlur={handleUserInput} required />

                    <div>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" />
                                        Remember Me
                        </label>
                        <a href="#">Forget Password?</a>
                        
                    </div>
                    

                    {
                        user.isLogin
                            ? <input type="submit" value="LogOut" onClick={userLogOut} />  
                            : <input type="submit" value="Login" />
                    }

                        
                </form>
                <p>
                    Don't have an account?
                    <Link to={'/createAccount'}> Create an account</Link>
                </p>

            </div>


            <div className="auth_area">

                <div className="box" onClick={handleFacebookLogin}>
                    <img src={facebook} alt="" />
                    <p>Continue with facebook</p>
                </div>

                <div className="box" onClick={handleGoogleLogin}>
                    <img src={google} alt="" />
                    <p>Continue with Google</p>
                </div>

                <div className="box" onClick={handleGitHubLogin}>
                    <img src={github} alt="" />
                    <p>Continue with GitHub</p>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;