import React from 'react';

 const asynchComponent = (importComponent) => {
    return class A extends React.Component {
        state = {
            component: null
        }
        componentDidMount() {
            importComponent().then((cmp) => {
                console.log('cmp',cmp);
                this.setState({
                    component: cmp.default
                });
            });
        }
        render() {
            const C = this.state.component;
            return C ? <C {...this.props}></C>:null

        }
    }
}
export default asynchComponent;