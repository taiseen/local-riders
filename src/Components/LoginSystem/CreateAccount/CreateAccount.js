import React, { useContext } from 'react';

import './CreateAccount.css'
import facebook from '../../../img/facebook.png'
import google from '../../../img/google.png'
import github from '../../../img/github.png'

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { createUserWithEmailAndPassword, faceBookLogin, gitHubLogin, googleLogin, initLoginFrameWork } from '../FireBaseLogin/FireBaseLoginManager';

const CreateAccount = () => {

    const [loginUser, setLoginUser] = useContext(UserContext);

    const { register, handleSubmit, watch, errors } = useForm();

    initLoginFrameWork();

    // user info send to Google Firebase...
    const onSubmit = (userData) => {
        //event.preventDefault();

        if( userData.password === userData.rePassword){
            console.log(userData);
            //userData.name
            createUserWithEmailAndPassword( userData.email, userData.password)
            .then(res => {

                setLoginUser(res);
            })

        }else{
            console.log(`password don't match`);
        }
































        console.log('newAccountCreate.........................');
    }

    const handleBlur = (event) => {

        if (event.target.name === 'name') {
            console.log(event.target.value);
        }
        if (event.target.name === 'email') {
            console.log(event.target.value);
        }
        if (event.target.name === 'password') {
            console.log(event.target.value);
        }
        if (event.target.name === 'rePassword') {
            console.log(event.target.value);
        }

    }



    // FaceBook =========================================
    const handleFacebookLogin = () => {
        console.log('fb === Create Account Page');
        faceBookLogin()
        .then(res => {
            // pass to context api for global access
            setLoginUser(res);
            // history.replace(from);
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
            // history.replace(from);
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
            // history.replace(from);
            console.log("Git => ", loginUser);
        })
    }
    
    return (

        <div className="loginPage">
            <div className="singUp_area">
                <h3>Create an account</h3>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" name="name" placeholder="Name" ref={register({ required: true })} />
                    {errors.name && <span className="error">Name is required</span>}

                    <input type="text" name="email" placeholder="Username of Email" ref={register({ required: true ,  pattern:/\S+@\S+.\S+/ })} />
                    {errors.email && <span className="error">Email is required</span>}

                    <input type="password" name="password" placeholder="Password" ref={register({ required: true , minLength: 6})} />
                    {errors.password && <span className="error">Password is required</span>}

                    <input type="password" name="rePassword" placeholder="Conform Password" ref={register({ required: true , minLength: 6 })} />
                    {errors.rePassword && <span className="error">Password is required</span>}

                    <input type="submit" value="Create an account" />
                </form>
                <p>
                    Already have an account?
                <Link to={'/login'}>Login </Link>
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

export default CreateAccount;