import React,{useContext} from 'react';
import AuthContext from './authContext';

const HeaderComponent = (props) => {
    const auth = useContext(AuthContext);
    return (<div>
        {auth.status ? <button onClick={props.todoListClick}>Todo List</button> : null}
        <button onClick={props.authClick}>Auth List</button>
    </div>)
}
export default HeaderComponent