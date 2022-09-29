import { WeatherTypes } from "../types/types"

export type ReducerStateType = {
  weather: WeatherTypes | null
  loading: boolean
  error?: string | null
}

const initialState: ReducerStateType = {
  weather: null,
  loading: false,
  error: null,
}

export type ReducerReturnType = (
  state: ReducerStateType | undefined,
  action: ReducerActionType
) => ReducerStateType

export type ReducerActionType =
  | { type: "request" }
  | { type: "success"; results: WeatherTypes }
  | { type: "failure"; error: string }

const weatherReducer = (state = initialState, action: ReducerActionType) => {
  switch (action.type) {
    case "request":
      return { ...state, loading: true }
    case "success":
      return { ...state, loading: false, weather: action.results }
    case "failure":
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}

export { weatherReducer, initialState }
