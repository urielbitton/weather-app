import React from 'react'
import convertTextToIcon from "../utilities/convertWeatherTextToIcon"

export default function DayBox(props) {

  const {day, high, low, text} = props.day
  const {isToday} = props

  return (
    <div className={`day-box ${isToday ? "today" : ""}`}>
      <h4>{day}</h4>
      <div className="weather-row">
        <i 
          className={convertTextToIcon(text)}
          title={text}
        ></i>
        <div className="text-info">
          <big 
            title={`High: ${high}, Low: ${low}`}
          >
            {high}
            <sup>o</sup>
          </big>
          {
            isToday &&
            <h5>{text}</h5>
          }
        </div>
      </div>
    </div>
  )
}
