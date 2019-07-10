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
                    }else{
                        this.props.history.push('/admin');
                    }
                }
            }
        })
    }

    render() {
        return (
            <div className="parent-div">
                <div>
                    <label>Email</label>
                    <input />
                </div>
                <div>
                    <label>Password</label>
                    <input />
                </div>
                <div><button onClick={(e) => { this.login(e) }}>Login</button></div>
                <div><Link to="/signup">Signup</Link> <br />
                    <Link to="/forgotPassword">Forgot Password</Link>
                </div>
            </div>
        );
    }
}
export default Logincomponent;