import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from '../pages/login'
// import routes from '../router'
// import { renderRoutes } from 'react-router-config'
// import Home from '../pages/home'
const App = () => {
  return (
    <Router>
      <Route path="/login" component = {Login}/>
    </Router>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
