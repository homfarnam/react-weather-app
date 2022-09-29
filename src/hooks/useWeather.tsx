import { getCityWeather } from "@farnamh/weather-api"
import { useEffect, useReducer } from "react"
import {
  initialState,
  ReducerReturnType,
  weatherReducer,
} from "../reducers/weatherReducer"
import { WeatherTypes } from "../types/types"

const useWeather = (city: string, token: string) => {
  const [{ weather, loading, error }, weatherDispatch] =
    useReducer<ReducerReturnType>(weatherReducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      weatherDispatch({ type: "request" })
      await getCityWeather(city, token)
        .then((res: WeatherTypes) => {
          if (res.currentConditions) {
            weatherDispatch({ type: "success", results: res })
          } else {
            weatherDispatch({ type: "failure", error: "City not found" })
          }
        })
        .catch((err) => {
          weatherDispatch({ type: "failure", error: err })
        })
    }

    if (city && token) {
      fetchData()
    }
  }, [city, token])

  return { weather, loading, error }
}

export default useWeather
