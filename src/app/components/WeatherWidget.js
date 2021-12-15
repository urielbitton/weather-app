import React, { useContext, useEffect, useState } from 'react'
import { useRouteMatch } from "react-router-dom"
import { getWeatherByCityAndScale } from "../services/weatherServices"
import { StoreContext } from "../store/store"
import '../styles/WeatherWidget.css'
import DayBox from "./DayBox"
import Loader from "./Loader"

export default function WeatherWidget() {

  const {darkMode, setDarkMode} = useContext(StoreContext)
  const [weatherData, setWeatherData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const cityName = useRouteMatch('/:cityName').params.cityName

  const forecastRender = weatherData?.forecasts
  ?.slice(0,5)
  .map((day, i) => {
    return <DayBox 
      day={day}
      key={i}
      isToday={i === 0}
    />
  })

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  useEffect(() => {
    setIsLoading(true)
    getWeatherByCityAndScale(cityName, 'c', setWeatherData)
    .then(() => {
      setIsLoading(false)
    })
  },[cityName])
  
  return (
    <div className="weather-widget">
      {
        !isLoading ?
        forecastRender :
        <Loader />
      }
      <div 
        className="dark-mode-btn"
        onClick={() => toggleDarkMode()}
        title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        <i className={darkMode ? "fad fa-moon" : "fad fa-sun"}></i>
      </div>
    </div>
  )
}
