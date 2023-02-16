import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="mb-1" id="app-menu">
      <nav className="mb-4 navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <a href="https://www.teachermade.com" className="navbar-brand">
            <img src={logo} alt="Teacher Made" height="45"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="collapsibleNavbar">
            <nav className="mr-auto navbar-nav">
              <a href="/app" className="nav-link">My Activities</a>
              <button type="button" className="nav-link btn btn-link">
                <span>New Activity</span>
              </button>
            </nav>
            <nav className="align-items-stretch navbar-nav">
              <div className="dropdown">
                <a href="/current" className="mr-3 nav-link dropdown-toggle" data-toggle="dropdown">
                  <i className="fas fa-user mr-2"></i>
                  User
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/logout">
                    <i className="fas fa-sign-out-alt mr-2"></i>
                    Logout
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
