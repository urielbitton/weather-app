import React from 'react'
import '../styles/WeatherMenu.css'
import { NavLink } from 'react-router-dom'

export default function WeatherMenu({cities}) {

  const citiesRender = cities?.map((city,i) => {
    return <NavLink 
      to={city.url}
      exact
      activeClassName="active-link"
    >
      <h1 key={i}>{city.name}</h1>
    </NavLink>
  })

  return (
    <div className="weather-menu">
      {citiesRender}
    </div>
  )
}
