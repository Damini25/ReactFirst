import React, { useState } from 'react';
import HeaderComponent from './header';
import AuthComponent from './auth';
import TodoComponent from './todo';
import AuthContext from './authContext';

const HookAppComponent = () => {
    const [pageName, setPage] = useState('auth');
    const [authStatus, setAuthStatus] = useState(false);

    const switchPage = (pgeName) => {
        setPage(pgeName);
    }
    const login = () => {
        setAuthStatus(true);
    }
    
    return (<div>
        <AuthContext.Provider value={{ status: authStatus, login: login }}>
            <HeaderComponent todoListClick={switchPage.bind(this, 'todo')}
                authClick={switchPage.bind(this, 'auth')}></HeaderComponent>
            <hr></hr>
            {pageName === 'todo' ? <TodoComponent></TodoComponent> :
                <AuthComponent></AuthComponent>}
        </AuthContext.Provider>
    </div >)
}
export default HookAppComponent;