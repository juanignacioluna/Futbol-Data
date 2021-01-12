import React, { Component, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './Partidos.css';


function Resultado(props) {

  if((props.info.score.fullTime.homeTeam)!=null) {

    return(props.info.score.fullTime.homeTeam + " - " + props.info.score.fullTime.awayTeam);

  }else{

  	return("vs");

  }

}





function Partidos(props){


	const [fecha, setFecha] = useState(1)

	const [partidosTotales, setPartidosTotales] = useState([])

	const [partidosActuales, setPartidosActuales] = useState([])


	function Siguiente(e){

		setFecha(fecha+1)



		let partidosActuales2=[]

		for (let i = 0; i < partidosTotales.length; i++) {

			if(partidosTotales[i].matchday==(fecha+1)){

				partidosActuales2.push(partidosTotales[i])

			}

		}

		console.log(partidosActuales2)

		setPartidosActuales(partidosActuales2)

	}


	function Anterior(e){


		if(fecha!=1){

			setFecha(fecha-1)



			let partidosActuales2=[]

			for (let i = 0; i < partidosTotales.length; i++) {

				if(partidosTotales[i].matchday==(fecha-1)){

					partidosActuales2.push(partidosTotales[i])

				}

			}

			console.log(partidosActuales2)

			setPartidosActuales(partidosActuales2)

		}


	}


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


	    fetch("https://api.football-data.org/v2/competitions/"+idLiga+"/matches",{
			method: 'GET',
			headers: myHeaders,
	    })
	    .then(response => response.json())
	    .then((responseJson)=> {

	    	console.log(responseJson.matches)

	    	setPartidosTotales(responseJson.matches)


		    fetch("https://api.football-data.org/v2/competitions/"+idLiga,{
				method: 'GET',
				headers: myHeaders,
		    })
		    .then(response2 => response2.json())
		    .then((responseJson2)=> {

		    	console.log(responseJson2)

		    	setFecha(responseJson2.currentSeason.currentMatchday)

		    	let partidosActuales2=[]

				for (let i = 0; i < responseJson.matches.length; i++) {

					if(responseJson.matches[i].matchday==responseJson2.currentSeason.currentMatchday){

						partidosActuales2.push(responseJson.matches[i])

					}

				}

				console.log(partidosActuales2)

				setPartidosActuales(partidosActuales2)

		    })

	    })

  
  }, []);

    return (

      <div className="Partidos">


      	<h1 class="titulo">Partidos</h1>

	    <div class="container-fluid">
	    	<div class="row justify-content-center">
	    		<div class="col-lg-8 col-md-10 col-12">

	    			<h3>Fecha {fecha}</h3>

					<div class="btn-group" role="group">

					  <button onClick={Anterior} 
					  type="button" class="btn btn-info">Anterior</button>

					  <button onClick={Siguiente}
					   type="button" class="btn btn-info">Siguiente</button>

					</div>

					<table class="table table-dark table-striped table-hover">
					  <tbody>

				          {partidosActuales.map((partido, index) => (

						    <tr key={partido.id}>

						      <td>{partido.status}</td>

						      <td>

						      	<Link to={"/equipo/"+partido.homeTeam.id}>
						      		{partido.homeTeam.name}
						      	</Link>

						      </td>

						      <td>

						      	<Resultado info={partido}/>

						      </td>
						      <td>
						      
						      	<Link to={"/equipo/"+partido.awayTeam.id}>
						      		{partido.awayTeam.name}
						      	</Link>

						      </td>
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

export default Partidos;
