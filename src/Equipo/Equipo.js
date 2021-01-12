import React, { Component, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './Equipo.css';


function Equipo(props){


	const [info, setInfo] = useState({area:{},squad:[]})


	useEffect(() => {


	  	let id = props.match.params.id

		const myHeaders = new Headers();

		myHeaders.append('X-Auth-Token', 'a641b1068e9a4cf49ee8ec08f27354c7');


	    fetch("https://api.football-data.org/v2/teams/"+id,{
			method: 'GET',
			headers: myHeaders,
	    })
	    .then(response => response.json())
	    .then((responseJson)=> {

	    	console.log(responseJson.squad)

	    	setInfo(responseJson)

	    })

  
  }, []);

    return (

      <div className="Equipo">


      	<h1 class="titulo"><img src={info.crestUrl} class="escudoo"></img>{info.name}</h1>

	    <div class="container-fluid">
	    	<div class="row justify-content-center">
	    		<div class="col-md-10 col-12 info">

	    			<h6><b>País:</b> {info.area.name}</h6>

	    			<br />

	    			<h6><b>Telefono:</b> {info.phone}</h6>

	    			<br />

	    			<h6><b>Website:</b> {info.website}</h6>

	    			<br />

	    			<h6><b>Año de fundación:</b> {info.founded}</h6>

	    			<br />

	    			<h6><b>Estadio:</b> {info.venue}</h6>


	    			<br /><br /><br />


	    			<h3>Plantel: </h3>

					<table class="table table-bordered table-hover">
					  <thead class="thead-dark">
					    <tr>
					      <th scope="col">Nombre</th>
					      <th scope="col">Posición</th>
					    </tr>
					  </thead>
					  <tbody>

				          {info.squad.map((jugador, index) => (

						    <tr class="table-success" key={jugador.id}>
						      <td>{jugador.name}</td>
						      <td>{jugador.position}</td>
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

export default Equipo;
