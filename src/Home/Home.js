import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import inglaterra from './inglaterra.svg';
import espana from './espana.svg';
import francia from './francia.svg';
import alemania from './alemania.svg';
import italia from './italia.svg';

import './Home.css';


function Home(){

    return (

      <div className="Home">


	        <div class="jumbotron jumbotron-fluid">
	          <div class="container">
	            <h1 class="display-4">Bienvenido a FutbolData</h1>
	            <p class="lead">Esta aplicación te brindara la información mas reciente sobre las 5 grandes ligas de futbol</p>
	          </div>
	        </div>

	        <div class="container-fluid ligas">
	          <div class="row justify-content-center">
	            <div class="col-sm">

	            	<Link to="/liga/premier" className="nav-link">

		                <div class="card bg-light">
		                  <img src={inglaterra} class="card-img"></img>
		                  <div class="card-img-overlay">
		                    <h5 class="card-title">Premier</h5>
		                  </div>
		                </div>

	            	</Link>
	              
	            </div>
	            <div class="col-sm">

	            	<Link to="/liga/laliga" className="nav-link">

		                <div class="card bg-light">
		                  <img src={espana} class="card-img"></img>
		                  <div class="card-img-overlay">
		                    <h5 class="card-title">La Liga</h5>
		                  </div>
		                </div>

		            </Link>


	            </div>
	            <div class="col-sm">

	            	<Link to="/liga/seriea" className="nav-link">

		                <div class="card bg-light">
		                  <img src={italia} class="card-img"></img>
		                  <div class="card-img-overlay">
		                    <h5 class="card-title">Serie A</h5>
		                  </div>
		                </div>

		            </Link>
	              
	            </div>
	          </div>

	          <br />

	          <div class="row justify-content-center">
	            <div class="col-sm-4">


	            	<Link to="/liga/bundesliga" className="nav-link">

		                <div class="card bg-dark text-white">
		                  <img src={alemania} class="card-img"></img>
		                  <div class="card-img-overlay">
		                    <h5 class="card-title">Bundesliga</h5>
		                  </div>
		                </div>

		            </Link>
	              
	            </div>
	            <div class="col-sm-4">

	           		<Link to="/liga/ligue1" className="nav-link">

		                <div class="card bg-dark text-white">
		                  <img src={francia} class="card-img"></img>
		                  <div class="card-img-overlay">
		                    <h5 class="card-title">Ligue 1</h5>
		                  </div>
		                </div>

	                </Link>
	              
	            </div>
	          </div>
	        </div>

	        <br/>

      </div>


    );

}

export default Home;
