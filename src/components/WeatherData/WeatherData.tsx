import React from "react"
import { ClipLoader } from "react-spinners"
import useWeather from "../../hooks/useWeather"
import Days from "../Days/Days"
import Header from "../Header/Header"

interface IWeatherDataProps {
  city: string
}

const WeatherData = ({ city }: IWeatherDataProps) => {
  const weatherToken = process.env.REACT_APP_TOKEN as string

  const { weather, error, loading } = useWeather(city, weatherToken)

  return (
    <React.Fragment>
      {loading && (
        <ClipLoader
          className="my-10"
          color="black"
          loading={loading}
          size={150}
        />
      )}
      {error ? (
        <h3 className="my-10 text-2xl text-red-500">{error}</h3>
      ) : (
        weather &&
        Object.keys(weather).length > 0 && (
          <React.Fragment>
            <Header data={weather} />
            <Days data={weather.days} />
          </React.Fragment>
        )
      )}
    </React.Fragment>
  )
}

export default WeatherData
