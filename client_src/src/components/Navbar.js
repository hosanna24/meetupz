import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="#43a047 green darken-1">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Meetupz</a>
            <a data-activates="mobile-demo" className="button-collapse">
            <i className="fa fa-bars"></i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/"><i className="fa fa-users"></i> Meetups</Link></li>
              <li><Link to="/meetups/add"><i className="fa fa-plus"></i> Add Meetup</Link></li>
              <li><Link to="/about"><i className="fa fa-question-circle"></i> About</Link></li>
              <li><Link to="/explore"><i className="fa fa-desktop"></i> Explore</Link></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><Link to="/"><i className="fa fa-users"></i> Meetups</Link></li>
              <li><Link to="/meetups/add"><i className="fa fa-plus"></i> Add Meetup</Link></li>
              <li><Link to="/about"><i className="fa fa-question-circle"></i> About</Link></li>
              <li><Link to="/explore" className="btn"><i className="fa fa-desktop"></i> Explore</Link></li>
            </ul>
          </div>
       </nav>
       <div className="row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s2"><a href="#test1">Test 1</a></li>
            <li className="tab col s2"><a className="active" href="#test2">Test 2</a></li>
            <li className="tab col s2"><a href="#test3">TEst 3</a></li>
            <li className="tab col s2"><a href="#test4">Test 4</a></li>
            <li className="tab col s2"><a href="#test1">Test 5</a></li>
            <li className="tab col s2"><a href="#test2">Test 6</a></li>
          </ul>
      </div>
      </div>
    </div>
    )
  }
}

export default Navbar;
