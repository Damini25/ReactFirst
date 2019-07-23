import React from 'react';
import {Redirect} from 'react-router-dom';

class LoginHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: true,
            member: true
        };
    }

    logout() {
        this.setState({
            auth: false,
            member: false
        })
    }

    render() {
        let redirect=null;
        if (this.state['auth']) {
            if (this.state['member']) {
            // return   this.props.history.push('/member');
            redirect=<Redirect to="/member"></Redirect>
            } else {
                redirect=<Redirect to="/admin"></Redirect>
               // return   this.props.history.push('/admin');
            }
        } else {
            redirect=<Redirect to="/login"></Redirect>
           // return this.props.history.push('/login');
        }
        return redirect;
    }
    
}

export default LoginHome;