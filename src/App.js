import React, { Component } from 'react';
import './App.css';

// Components
import Header from './components/header/header'
import Footer from './components/footer/footer'
import HomePage from './pages/homePage'

class App extends Component {
  render() {
    return (
      <div /*className="App"*/>
        <Header/>

        <HomePage/>

        <Footer/>
      </div>
    );
  }
}

export default App;
