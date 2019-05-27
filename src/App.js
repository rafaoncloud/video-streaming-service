import React, { Component } from 'react';
import './App.css';

import { 
  Router,
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

import UserManager from './pages/userManager'

import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
      <div className="wrapper-app" /*className="App"*/>
        <Header/>
        <div className="content-homepage">
          <Route exact path='/' component={HomePage}/>
        </div>
        <div className="content">
          <Route exact path='/about-us' component={AboutUs}/>
          <Route exact path='/users' component={UsersManager}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/logout' component={Logout}/>
          <Route exact path='/sign-up' component={SignUp}/>
          
          <Route exact path='/user' component={UserManager}/>
        </div>
        <br/>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
