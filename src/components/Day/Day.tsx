import React from "react"
import { DayType } from "../../types/types"
import { convertDateToDay, convertFtoC } from "../../utils/utils"

export interface DayProps {
  data: DayType
}

const Day = ({ data }: DayProps) => {
  return (
    <div className="day">
      <div className="day__data">
        <h3 className="day__data--title">{convertDateToDay(data.datetime)}</h3>
        <div className="w-full p-2 flex flex-wrap justify-between items-center">
          <p className="text-white p-3 text-lg first-letter:uppercase ">
            <span className="font-bold">Max Temp: </span>
            <span>
              {convertFtoC(data.tempmax)}°C /{"  "}
              {data.tempmax}°F
            </span>
          </p>
          <p className="text-white p-3 text-lg first-letter:uppercase ">
            <span className="font-bold">Min Temp: </span>
            <span>
              {convertFtoC(data.tempmin)}°C /{"  "}
              {data.tempmin}°F
            </span>
          </p>
          <p className="text-white p-3 text-lg first-letter:uppercase ">
            <span className="font-bold">Pressure: </span>
            <span>{data.pressure}</span>
          </p>
        </div>
        <div className="w-full p-2 flex flex-wrap justify-between items-center">
          <p className="text-white p-3 text-lg first-letter:uppercase ">
            <span className="font-bold">Sunrise: </span>
            <span>{data.sunrise}</span>
          </p>
          <p className="text-white p-3 text-lg first-letter:uppercase ">
            <span className="font-bold">Sunset: </span>
            <span>{data.sunset}</span>
          </p>
          <p className="text-white p-3 text-lg first-letter:uppercase ">
            <span className="font-bold">Feels Like: </span>
            <span>
              {convertFtoC(data.feelslike)}°C /{"  "}
              {data.feelslike}°F
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Day
