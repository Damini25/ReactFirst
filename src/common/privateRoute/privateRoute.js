import React from 'react';

class PrivateRouteComponent extends React.Component {
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
               <div><button>Login</button></div> 
            </div>
        );
    }
}
export default PrivateRouteComponent;