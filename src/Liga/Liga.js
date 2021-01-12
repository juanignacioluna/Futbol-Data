import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './Liga.css';

import equiposImg from './equipos.png';

import goleadoresImg from './goleadores.png';

import partidosImg from './partidos.png';



function Liga(props){

    return (

      <div className="Liga">


      	<h1 class="titulo">{props.match.params.id.toUpperCase()}</h1>


	    <div class="container-fluid">

	          <div class="row justify-content-center">

	            <div class="col-lg-4 col-md-6 col-sm-6">

	            <Link to={"/partidos/"+props.match.params.id} className="nav-link">

					<div class="card bg-light">
					  <img src={partidosImg} class="card-img-top" />
					  <div class="card-body">
					    <h5 class="card-title">Partidos</h5>
					  </div>
					</div>

				</Link>
	              
	            </div>

	            <div class="col-lg-4 col-md-6 col-sm-6">

					<Link to={"/posiciones/"+props.match.params.id} className="nav-link">

						<div class="card bg-light">
						  <img src={equiposImg} class="card-img-top" />
						  <div class="card-body">
						    <h5 class="card-title">Posiciones</h5>
						  </div>
						</div>

					</Link>

	              
	            </div>

	            <div class="col-lg-4 col-md-6 col-sm-6">

	            <Link to={"/goleadores/"+props.match.params.id} className="nav-link">

					<div class="card bg-light">
					  <img src={goleadoresImg} class="card-img-top" />
					  <div class="card-body">
					    <h5 class="card-title">Goleadores</h5>
					  </div>
					</div>

				</Link>
	              
	            </div>


	          </div>


	    </div>




      </div>


    );

}

export default Liga;
