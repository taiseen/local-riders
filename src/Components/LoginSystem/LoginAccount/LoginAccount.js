import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, logInWithEmailAndPassword, initLoginFrameWork, loginProviderWebsite } from '../FireBaseLogin/FireBaseLoginManager';
import { UserLoginContext } from '../../ContextAPI/UserLoginContext';
import facebook from '../../../img/facebook.png'
import google from '../../../img/google.png'
import github from '../../../img/github.png'
import firebase from "firebase/app";
import './LoginAccount.css';

const LoginAccount = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const gitHubProvider = new firebase.auth.GithubAuthProvider();

    const { loginUser, setLoginUser } = useContext(UserLoginContext);

    // private routing purpose......
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [haveAccount, setHaveAccount] = useState(true);

    const [user, setUser] = useState({
        isLogin: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        userSuccess: false,
        userError: ''
    });

    const [createAccount, setCreateAccount] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: ''
    });

    initLoginFrameWork();


    const creatingAccountInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCreateAccount({ ...createAccount, [name]: value });
    }

    // user info send to Google Firebase...
    const handleCreateAccount = (e) => {
        e.preventDefault();

        const { name, email, password, rePassword } = createAccount;

        //console.log(name, email, password, rePassword);

        if (password === rePassword) {
            const newUserInfo = { ...user };
            newUserInfo.name = name;
            newUserInfo.email = email;
            newUserInfo.password = password;
            newUserInfo.userSuccess = true;

            createUserWithEmailAndPassword(email, password)
                .then(res => {
                    setLoginUser(res);
                    history.replace(from);
                });

        } else {
            console.log(`password don't match`);
        }
    }


    // all Provider PopUp Login
    const handleAllLoginProviderWebsite = (provider) => {

        loginProviderWebsite(provider)
            .then(res => {

                // pass to context api for global access
                setLoginUser(res);
                console.log(res)

                // for Private Route
                history.replace(from);
            })
    }


    // user input area conditions | Manual Login
    //##################################
    const handleUserInput = (event) => {
        event.preventDefault()

        let isFormValid = false;

        if (event.target.name === "email") {
            isFormValid = /\S+@\S+.\S+/.test(event.target.value);
        }

        if (event.target.name === "password") {
            const passwordLength = event.target.value.length > 6;
            const passwordNumber = /\d{1}/.test(event.target.value);
            isFormValid = passwordLength && passwordNumber;
        }

        if (isFormValid) {
            const updateUserInfo = { ...user };
            updateUserInfo[event.target.name] = event.target.value;

            // Locally store 
            setUser(updateUserInfo)
        }
    }


    // user submit button press conditions
    // these data send to Google Firebase For Login
    //####################################
    const handleManualLogin = (e) => {
        e.preventDefault();

        const { email, password } = user;
        if (email && password) {
            logInWithEmailAndPassword(email, password)
                .then(res => {
                    const { displayName } = res;
                    const newUser = { ...user };
                    newUser.isLogin = true;
                    newUser.name = displayName;

                    // setUser(newUser);
                    //console.log("===================================", newUser);

                    setLoginUser(res);

                    // private routing purpose......
                    history.replace(from)
                })
        }
    }


    const userLogOut = () => {
        setUser({});
        setLoginUser({});
        history.push('/');

    }

    // toggling switch... 
    const handleCreateAccountAngLogin = () => {
        setHaveAccount(!haveAccount);
    }

    return (

        <>

            {
                loginUser.email || loginUser.displayName
                    ?
                    <div className="logOutBtnDiv">
                        <input type="submit" value="LogOut" onClick={userLogOut} />
                    </div>
                    :
                    <>
                        {
                            haveAccount
                                ?
                                <div className="login_area">
                                    <h3>Login</h3>

                                    <form onSubmit={handleManualLogin}>

                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="Email"
                                            onBlur={handleUserInput}
                                            className="loginInputField"
                                            required />

                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            onBlur={handleUserInput}
                                            className="loginInputField"
                                            required />

                                        <div>
                                            <label htmlFor="">
                                                <input type="checkbox" name="" id="" />
                                                    Remember Me
                                            </label>
                                            <a href="/">Forget Password?</a>
                                        </div>
                                        <input type="submit" value="Login" className="logBtn" />
                                    </form>

                                    <p>
                                        Don't have an account?
                                        <span onClick={handleCreateAccountAngLogin}> Create an account</span>
                                    </p>
                                </div>

                                :
                                <div className="loginPage">
                                    <div className="singUp_area">
                                        <h3>Create an account</h3>
                                        <form onSubmit={handleCreateAccount}>

                                            <input type="text" name="name" placeholder="Name"
                                                className="loginInputField"
                                                value={createAccount.name}
                                                onChange={creatingAccountInput} />

                                            <input type="text" name="email" placeholder="Email"
                                                className="loginInputField"
                                                value={createAccount.email}
                                                onChange={creatingAccountInput} />

                                            <input type="password" name="password" placeholder="Password"
                                                className="loginInputField"
                                                value={createAccount.password}
                                                onChange={creatingAccountInput} />

                                            <input type="password" name="rePassword" placeholder="Conform Password"
                                                className="loginInputField"
                                                value={createAccount.rePassword}
                                                onChange={creatingAccountInput} />

                                            <input type="submit" value="Create an account" className="logBtn" />
                                        </form>
                                        <p>
                                            Already have an account?
                                <span onClick={handleCreateAccountAngLogin}> Login</span>
                                        </p>
                                        {/* {
                        user.userSuccess
                            ? <p className="success">Account Create Successfully</p>
                            : <p className="error">All ready have account with this email</p>
                    } */}
                                    </div>
                                </div>

                        }
                        <div className="auth_area">
                            <div className="box" onClick={() => handleAllLoginProviderWebsite(facebookProvider)}>
                                <img src={facebook} alt="" />
                                <p>Continue with facebook</p>
                            </div>
                            <div className="box" onClick={() => handleAllLoginProviderWebsite(googleProvider)}>
                                <img src={google} alt="" />
                                <p>Continue with Google</p>
                            </div>
                            <div className="box" onClick={() => handleAllLoginProviderWebsite(gitHubProvider)}>
                                <img src={github} alt="" />
                                <p>Continue with GitHub</p>
                            </div>
                        </div>

                    </>
            }


        </>
    );
};

export default LoginAccount;