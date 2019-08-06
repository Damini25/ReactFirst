import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { fetchProducts } from './loginService';

class Logincomponent extends React.Component {

    login(e) {
        fetchProducts().then((res) => {
            console.log('loginresponse', res);
            if (res.data.success) {
                if (res['data']['data']['auth']) {
                    if (res['data']['data']['member']) {
                        this.props.history.push('/member');
                    } else {
                        this.props.history.push('/admin');
                    }
                }
            }
        })
    }

    render() {
        return (
            <div className="parent-login-div">
                <h1>Account Login</h1>
                <hr></hr>
                <div class="input-div">
                    <div >
                        <label>Email Address</label>
                        <input />
                    </div>
                    <div>
                        <label>Password</label>
                        <input />
                    </div>
                    <div class="input-div-checkbox">
                        <input type="checkbox" id="remember_me_check" />
                        <label for="remember_me_check">Remember Me</label>
                    </div>
                    <button class="signin-btn" onClick={(e) => { this.login(e) }}>Sign in</button>
                    <div class="link-div">
                        <Link to="/signup">Create new account</Link> <span>|</span>
                        <Link to="/forgotPassword">Forgot your password?</Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Logincomponent;