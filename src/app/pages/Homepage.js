import React from 'react'
import WeatherWidget from '../components/WeatherWidget'

export default function Homepage() {
  return (
    <div 
      className="home-page"
      style={{width: '100%'}}
    >
      <WeatherWidget />
    </div>
  )
}
