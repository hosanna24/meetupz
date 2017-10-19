import React from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Main />
    </div>
    <div className="fixed-action-btn">
      <Link to="/meetups/add" className="btn-floating waves-effect waves-light red"><i className="fa fa-plus"></i></Link>
    </div>
    <br />
    <Footer />
  </div>
)

export default App;
