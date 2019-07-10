import React from 'react';

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
        if (this.state['auth']) {
            if (this.state['member']) {
             return   this.props.history.push('/member');
            } else {
                return   this.props.history.push('/admin');
            }
        } else {
            return this.props.history.push('/login');
        }
    }
    
}

export default LoginHome;