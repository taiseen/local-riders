import React from 'react';

import './CreateAccount.css'
import facebook from '../../../img/facebook.png'
import google from '../../../img/google.png'
import github from '../../../img/github.png'

import { useForm } from 'react-hook-form';

const CreateAccount = () => {

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = userData => {
        console.log(userData);
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
    const loginPage = () => {
        console.log('loginPage.........................');
    }
    const facebookLogin = () => {
        console.log('fb === Create Account Page');
    }
    const googleLogin = () => {
        console.log('google === Create Account Page');
        
    }
    const gitHubLogin = () => {
        console.log('git === Create Account Page');
    }

    // onBlur={handleBlur}
    
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
                <a href="#" onClick={loginPage} >Login</a>
                </p>
            </div>


            <div className="auth_area">
                <div className="box" onClick={facebookLogin}>
                    <img src={facebook} alt="" />
                    <p>Continue with facebook</p>
                </div>
                <div className="box" onClick={googleLogin}>
                    <img src={google} alt="" />
                    <p>Continue with Google</p>
                </div>
                <div className="box" onClick={gitHubLogin}>
                    <img src={github} alt="" />
                    <p>Continue with GitHub</p>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;