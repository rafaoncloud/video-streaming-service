import React, { Component } from 'react';
import './App.css';

import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// Components
import Header from './components/header/header'
import Footer from './components/footer/footer'
import HomePage from './pages/homePage'
import UsersManager from './pages/usersManager'
import AboutUs from './pages/aboutUs'
import Login from './pages/login'
import Logout from './pages/logout'
import SignUp from './pages/signUp'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="wrapper-app" /*className="App"*/>
        <Header/>
        <div className="content">
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/about-us' component={AboutUs}/>
          <Route exact path='/users' component={UsersManager}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/logout' component={Logout}/>
          <Route exact path='/sign-up' component={SignUp}/>
        </div>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
