import React from 'react'
import '../styles/AppContainer.css'
import WeatherMenu from "../components/WeatherMenu"
import WeatherWidget from '../components/WeatherWidget'
import { Route } from 'react-router'
import { cities } from '../api/citiesAPI'
import { Switch } from "react-router-dom"


export default function AppContainer() {
  return (
    <div className="app-container">
      <WeatherMenu cities={cities} />
      <Switch>
        <Route path="/:cityName">
          <WeatherWidget />
        </Route>
      </Switch>
    </div>
  )
}
