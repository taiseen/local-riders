import React from 'react';
import '../CreateAccount/CreateAccount.css'
import facebook from '../../../img/facebook.png'
import google from '../../../img/google.png'
import github from '../../../img/github.png'

const LoginPage = () => {
    return (
        <div>
            <div class="login_area">
                <h3>Login</h3>

                <form action="">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />

                    <div>
                        <label for="">
                            <input type="checkbox" name="" id="" />
                                        Remember Me
                        </label>
                        <a href="">Forget Password?</a>
                    </div>
                    <input type="submit" value="Login" />
                </form>
                <p>
                    Don't have an account?
                    <a href="#">Create an account</a>
                </p>
            </div>


            <div class="auth_area">
                <div class="box">
                    <img src={facebook} alt="" />
                    <p>Continue with facebook</p>
                </div>
                <div class="box">
                    <img src={google} alt="" />
                    <p>Continue with Google</p>
                </div>
                <div class="box">
                    <img src={github} alt="" />
                    <p>Continue with GitHub</p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;