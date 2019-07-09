import React from 'react';
import './App.css';
import AppRoutes from './appRouting';



class App extends React.Component {

  render() {
    return (
      <div className="main">
        <header>Welcome Damini</header>
        <div className="switch-routes">
         <AppRoutes/>
        </div>
      </div>
    );
  }
}
export default App;
