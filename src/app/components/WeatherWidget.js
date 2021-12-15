import React, { useEffect, useState } from 'react'
import { useRouteMatch } from "react-router-dom"
import { getWeatherByCityAndScale } from "../services/weatherServices"
import '../styles/WeatherWidget.css'
import DayBox from "./DayBox"
import Loader from "./Loader"

export default function WeatherWidget() {

  const [weatherData, setWeatherData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const cityName = useRouteMatch('/:cityName').params.cityName

  useEffect(() => {
    setIsLoading(true)
    getWeatherByCityAndScale(cityName, 'c', setWeatherData)
    .then(() => {
      setIsLoading(false)
    })
  },[cityName])
  
  const forecastRender = weatherData?.forecasts
  ?.slice(0,5)
  .map((day, i) => {
    return <DayBox 
      day={day}
      key={i}
      isToday={i === 0}
    />
  })
  
  return (
    <div className="weather-widget">
      {
        !isLoading ?
        forecastRender :
        <Loader />
      }
    </div>
  )
}
