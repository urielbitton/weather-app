import React, { useContext } from 'react'
import '../styles/AppContainer.css'
import WeatherMenu from "../components/WeatherMenu"
import WeatherWidget from '../components/WeatherWidget'
import { Route } from 'react-router'
import { cities } from '../api/citiesAPI'
import { Switch } from "react-router-dom"
import { StoreContext } from "../store/store"

export default function AppContainer() {

  const {darkMode} = useContext(StoreContext)

  return (
    <div className={`app-container ${darkMode ? "darkmode" : ""}`}>
      <WeatherMenu cities={cities} />
      <Switch>
        <Route path="/:cityName">
          <WeatherWidget />
        </Route>
      </Switch>
    </div>
  )
}
