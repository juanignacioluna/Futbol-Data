import React, { useState, useEffect } from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import Liga from './Liga/Liga';
import Goleadores from './Goleadores/Goleadores';
import Posiciones from './Posiciones/Posiciones';
import Partidos from './Partidos/Partidos';
import Equipo from './Equipo/Equipo';

import './App.css';


function App() {

  return (

      <BrowserRouter>

        <div>

          <NavBar />

          <Redirect
            from="/"
            to="/home" />

          <Switch>

            <Route
              path="/home"
              component={Home} />

            <Route
              path="/equipo/:id"
              component={Equipo} />

            <Route
              path="/goleadores/:id"
              component={Goleadores} />

            <Route
              path="/partidos/:id"
              component={Partidos} />

            <Route
              path="/posiciones/:id"
              component={Posiciones} />

            <Route
              path="/liga/:id"
              component={Liga} />

          </Switch>

        </div>

      </BrowserRouter>


  );
}

export default App;
