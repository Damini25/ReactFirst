import React, { useContext } from 'react';
import AuthContext from './authContext';

const AuthComponent = (props) => {
    const auth = useContext(AuthContext);
    return (<div>
        <button onClick={auth.login}>Login</button>
    </div>)
}
export default AuthComponent;