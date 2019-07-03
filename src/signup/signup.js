import React from 'react';
import './signup.css';

class SignUpcomponent extends React.Component {
    render() {
        return (
            <div className="parent-div">
                <div>
                    <label>Full Name</label>
                    <input />
                </div>
                <div>
                    <label>Email</label>
                    <input />
                </div>
                <div>
                    <label>Password</label>
                    <input />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input />
                </div>
               <div><button>Signup</button></div> 
            </div>
        );
    }
}
export default SignUpcomponent;