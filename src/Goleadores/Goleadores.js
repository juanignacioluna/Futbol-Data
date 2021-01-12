import React, { Component, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './Goleadores.css';


function Goleadores(props){

	const [tabla, setTabla] = useState([]);


	useEffect(() => {


	  	let idLiga

		switch (props.match.params.id) {
		  case 'laliga':
		    idLiga = 2014
		    break;
		  case 'seriea':
		    idLiga = 2019
		    break;
		  case 'premier':
		    idLiga = 2021
		    break;
		  case 'bundesliga':
		    idLiga = 2002
		    break;
		  case 'ligue1':
		    idLiga = 2015
		    break;
		}

		const myHeaders = new Headers();

		myHeaders.append('X-Auth-Token', 'a641b1068e9a4cf49ee8ec08f27354c7');


	    fetch("https://api.football-data.org/v2/competitions/"+idLiga+"/scorers",{
			method: 'GET',
			headers: myHeaders,
	    })
	    .then(response => response.json())
	    .then((responseJson)=> {

	    	console.log(responseJson.scorers)

	    	setTabla(responseJson.scorers)

	    })

  
  }, []);

    return (

      <div className="Goleadores">


      	<h1 class="titulo">Goleadores</h1>

	    <div class="container-fluid">
	    	<div class="row justify-content-center">
	    		<div class="col-md-10 col-12">

					<table class="table table-dark table-striped table-hover">
					  <thead>
					    <tr>
					      <th scope="col">#</th>
					      <th scope="col">Nombre</th>
					      <th scope="col">Equipo</th>
					      <th scope="col">Goles</th>
					    </tr>
					  </thead>
					  <tbody>

				          {tabla.map((jugador, index) => (

						    <tr key={jugador.player.id}>
						      <th scope="row">{index+1}</th>
						      <td>{jugador.player.name}</td>
						      <td>
						      	<Link to={"/equipo/"+jugador.team.id}>
						      		{jugador.team.name}
						      	</Link>
						      </td>
						      <td>{jugador.numberOfGoals}</td>
						    </tr>

				          ))}

					  </tbody>
					</table>

	    		</div>
	    	</div>
	    </div>




      </div>


    );

}

export default Goleadores;
