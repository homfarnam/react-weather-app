import type { WeatherTypes } from "../../types/types"
import { calcAvgTemp, convertFtoC } from "../../utils/utils"
import Title from "../Shared/Title/Title"

interface HeaderProps {
  data: WeatherTypes
}

const CityWeatherDetail = ({
  arrKey,
  data,
}: {
  arrKey: keyof WeatherTypes["currentConditions"]
  data: WeatherTypes
}) => {
  return (
    <p className="p-3 text-lg text-white first-letter:uppercase ">
      <span className="font-bold">{arrKey}: </span>
      <span>{data.currentConditions[arrKey]}</span>
    </p>
  )
}

const Header = ({ data }: HeaderProps) => {
  const avgTemp =
    data.days.slice(1).reduce((acc, curr) => acc + convertFtoC(curr.temp), 0) /
    (data.days.length - 1) // -1 because we don't want to include current day

  return (
    <div className="header">
      <Title text={data.resolvedAddress} />
      <div>
        <h3 className="header--currentTemp">
          Current Temperature: {convertFtoC(data.currentConditions.temp)}°C{" "}
          {"   "}/ {data.currentConditions.temp}°F
        </h3>
        <h3 className="header--feelsLike">
          Feels Like: {convertFtoC(data.currentConditions.feelslike)}°C /{"  "}
          {data.currentConditions.feelslike}°F
        </h3>
        <h3 className="header--avg">
          Average Temperature: {calcAvgTemp(avgTemp, "Cel")}°C /{"  "}
          {calcAvgTemp(avgTemp, "Far")}°F
        </h3>
      </div>
      <section className="header__currentDetails">
        <div>
          <CityWeatherDetail arrKey="humidity" data={data} />
          <CityWeatherDetail arrKey="dew" data={data} />
          <CityWeatherDetail arrKey="windspeed" data={data} />
        </div>
        <div>
          <CityWeatherDetail arrKey="snow" data={data} />
          <CityWeatherDetail arrKey="conditions" data={data} />
          <CityWeatherDetail arrKey="pressure" data={data} />
        </div>
      </section>
    </div>
  )
}

export default Header
