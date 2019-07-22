import React from 'react';
import './App.css';
import AppRoutes from './appRouting';
import { Link,NavLink } from 'react-router-dom'



class App extends React.Component {

  render() {
    return (
      <div className="main">
        <div className="switch-routes">
          <AppRoutes />
        </div>
      </div>
    );
  }
}
export default App;
