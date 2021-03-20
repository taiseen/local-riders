import React, { useContext, useState } from 'react';

import './CreateAccount.css'
import facebook from '../../../img/facebook.png'
import google from '../../../img/google.png'
import github from '../../../img/github.png'

import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import { createUserWithEmailAndPassword, faceBookLogin, gitHubLogin, googleLogin, initLoginFrameWork } from '../FireBaseLogin/FireBaseLoginManager';

const CreateAccount = () => {


    // private routing purpose......
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const { register, handleSubmit, watch, errors } = useForm();

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

    // user info send to Google Firebase...
    const onSubmit = (userData) => {
        const { name, email, password, rePassword } = userData
        if (password === rePassword) {
            const newUserInfo = { ...user };
            newUserInfo.name = name;
            newUserInfo.email = email;
            newUserInfo.password = password;
            newUserInfo.userSuccess = true;
            
            console.log(newUserInfo);

            createUserWithEmailAndPassword(userData.email, userData.password)
                .then(res => {
                    //useState(newUserInfo);
                    setLoginUser(res);
                    history.replace(from);
                })

        } else {
            console.log(`password don't match`);
        }

        console.log('newAccountCreate.........................');
    }


    // FaceBook =========================================
    const handleFacebookLogin = () => {
        console.log('fb === Create Account Page');
        faceBookLogin()
            .then(res => {
                // pass to context api for global access
                setLoginUser(res);
                history.replace(from);
                console.log("FB => ", loginUser);
            })
    }

    // Google ===========================================
    const handleGoogleLogin = () => {
        console.log('google === Create Account Page');
        googleLogin()
            .then(res => {
                // pass to context api for global access
                setLoginUser(res);
                history.replace(from);
                console.log("Google => ", loginUser);
            })

    }

    // GitHub ===========================================
    const handleGitHubLogin = () => {
        console.log('git === Create Account Page');
        gitHubLogin()
            .then(res => {
                // pass to context api for global access
                setLoginUser(res);
                history.replace(from);
                console.log("Git => ", loginUser);
            })
    }

    return (

        <div className="loginPage">
            <div className="singUp_area">
                <h3>Create an account</h3>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" name="name" placeholder="Name" ref={register({ required: true })} />
                    {errors.name && <span className="error e1">Name is required</span>}

                    <input type="text" name="email" placeholder="Username of Email" ref={register({ required: true, pattern: /\S+@\S+.\S+/ })} />
                    {errors.email && <span className="error e2">Email is required</span>}

                    <input type="password" name="password" placeholder="Password" ref={register({ required: true, minLength: 6 })} />
                    {errors.password && <span className="error e3">Password is required</span>}

                    <input type="password" name="rePassword" placeholder="Conform Password" ref={register({ required: true, minLength: 6 })} />
                    {errors.rePassword && <span className="error e4">Password is required</span>}

                    <input type="submit" value="Create an account" />
                </form>
                <p>
                    Already have an account?
                <Link to={'/login'}>Login </Link>
                </p>
                {/* {
                    user.userSuccess
                        ? <p className="success">Account Create Successfully</p>
                        : <p className="error">All ready have account with this email</p>
                } */}

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

export default CreateAccount;