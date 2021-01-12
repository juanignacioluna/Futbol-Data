import React, { Component, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './Posiciones.css';


function Posiciones(props){


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


	    fetch("https://api.football-data.org/v2/competitions/"+idLiga+"/standings",{
			method: 'GET',
			headers: myHeaders,
	    })
	    .then(response => response.json())
	    .then((responseJson)=> {

	    	setTabla(responseJson.standings[0].table)

	    })

  
  }, []);

    return (

      <div className="Posiciones">


      	<h1 class="titulo">Posiciones</h1>

	    <div class="container-fluid">
	    	<div class="row justify-content-center">
	    		<div class="col-md-10 col-12">

					<table class="table table-dark table-striped table-hover">
					  <thead>
					    <tr>
					      <th scope="col">#</th>
					      <th scope="col">Equipo</th>
					      <th scope="col">PJ</th>
					      <th scope="col">V</th>
					      <th scope="col">E</th>
					      <th scope="col">D</th>
					      <th scope="col">PTS</th>
					    </tr>
					  </thead>
					  <tbody>

				          {tabla.map((equipo, index) => (

						    <tr key={equipo.team.id}>
						      <th scope="row">{index+1}</th>
						      <td>
							      	<img src={equipo.team.crestUrl} class="escudo"></img>
							      	<Link to={"/equipo/"+equipo.team.id}>
							      		{equipo.team.name}
							      	</Link>
						      </td>
						      <td>{equipo.playedGames}</td>
						      <td>{equipo.won}</td>
						      <td>{equipo.draw}</td>
						      <td>{equipo.lost}</td>
						      <td>{equipo.points}</td>
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

export default Posiciones;
