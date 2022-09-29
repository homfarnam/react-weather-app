import { useState } from "react"
import { WeatherData } from "./components"

const App = () => {
  const [city, setCity] = useState<string>("")
  const [showData, setShowData] = useState(false)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
    setShowData(false)
  }

  const fetchWeather = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (city) {
      setShowData(true)
    }
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={fetchWeather}>
          <input
            type="text"
            placeholder="Search City"
            value={city}
            onChange={handleSearch}
            className="app__searchInput"
            id="search"
            data-testid="search"
          />
        </form>
        {showData && <WeatherData city={city} />}
      </div>
    </div>
  )
}

export default App
