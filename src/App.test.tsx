/* eslint-disable testing-library/no-unnecessary-act */
import { cleanup, render, screen, fireEvent } from "@testing-library/react"
import App from "./App"
import mockData from "./mockData.json"
import { act } from "react-dom/test-utils"
import { getCityWeather } from "@farnamh/weather-api"

jest.mock("@farnamh/weather-api")

describe("App component test", () => {
  afterEach(cleanup)

  it("Mock Api data - Success", async () => {
    const mockedGetCityWeather = getCityWeather as jest.Mock

    mockedGetCityWeather.mockImplementation(() => {
      return Promise.resolve(mockData.data)
    })

    render(<App />)

    const input = await screen.findByTestId("search")
    await act(async () => {
      fireEvent.change(input, { target: { value: "Amsterdam" } })

      fireEvent.submit(input)
    })

    const title = await screen.findByText("Amsterdam, Noord-Holland, Nederland")
    expect(title).toBeInTheDocument()
  })
  it("Mock Api data - Failure", async () => {
    const mockedGetCityWeather = getCityWeather as jest.Mock
    mockedGetCityWeather.mockImplementation(() => {
      return Promise.reject("City not found")
    })

    render(<App />)

    const input = await screen.findByTestId("search")
    await act(async () => {
      fireEvent.change(input, { target: { value: "abcdef" } })

      fireEvent.submit(input)
    })

    const title = await screen.findByText("City not found")

    expect(title).toBeInTheDocument()
  })
})
