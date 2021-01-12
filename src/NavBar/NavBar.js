import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(){

    return (
      <div className="NavBar">


        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
          <Link to="/home" className="navbar-brand">FutbolData</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/home" className="nav-link">Inicio</Link>
              </li>
              <li class="nav-item active">
                <Link to="/liga/seriea" className="nav-link">Serie A</Link>
              </li>
              <li class="nav-item active">
                <Link to="/liga/laliga" className="nav-link">La Liga</Link>
              </li>
              <li class="nav-item active">
                <Link to="/liga/premier" className="nav-link">Premier</Link>
              </li>
              <li class="nav-item active">
                <Link to="/liga/bundesliga" className="nav-link">Bundesliga</Link>
              </li>
              <li class="nav-item active">
                <Link to="/liga/ligue1" className="nav-link">Ligue1</Link>
              </li>
            </ul>
          </div>
        </nav>


      </div>
    );

}

export default NavBar;
