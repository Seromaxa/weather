import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { ADDRESS } from "../constants"

export const findLocation = createAsyncThunk(
  "weather/findLocation",
  async (_, { rejectWithValue, getState }) => {
    const city = getState().weather.search
    let address
    if (parseInt(city)) {
      address =
        ADDRESS.baseW +
        ADDRESS.citiId +
        city +
        ADDRESS.unints.base +
        ADDRESS.unints.metric +
        ADDRESS.keys.base +
        ADDRESS.keys.key
    } else {
      address =
        ADDRESS.baseF +
        ADDRESS.cityName +
        city +
        ADDRESS.unints.base +
        ADDRESS.unints.metric +
        ADDRESS.keys.base +
        ADDRESS.keys.key
    }
    try {
      const response = await fetch(address)
      if (!response.ok) {
        throw await response.json()
      }

      const data = await response.json()

      if (!data.list.length) {
        let error = { cod: 200, message: "City not found" }
        throw error
      }
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const setCurrent = createAsyncThunk(
  "weather/setCurrentCity",
  async (ev, { rejectWithValue }) => {
    try {
      const response = await fetch(
        ADDRESS.baseW +
          ADDRESS.citiId +
          ev +
          ADDRESS.unints.base +
          ADDRESS.unints.metric +
          ADDRESS.keys.base +
          ADDRESS.keys.key
      )

      if (!response.ok) {
        throw await response.json()
      }
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
/////////////////////////////////////////////////////////////
export const currentPosition = createAsyncThunk(
  "weaver/UserPosition",
  async (_, { dispatch, rejectWithValue }) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          try {
            const response = await fetch(
              ADDRESS.baseW +
                ADDRESS.coord.lat +
                pos.coords.latitude +
                ADDRESS.coord.lon +
                pos.coords.longitude +
                ADDRESS.unints.base +
                ADDRESS.unints.metric +
                ADDRESS.keys.base +
                ADDRESS.keys.key
            )
            if (!response.ok) {
              throw await response.json()
            }
            const data = await response.json()
            return dispatch(userLocation(data))
          } catch (error) {
            rejectWithValue(dispatch(setError(error)))
          }
        },
        async () => {
          try {
            const response = await fetch(
              ADDRESS.baseW +
                ADDRESS.cityName +
                "London" +
                ADDRESS.unints.base +
                ADDRESS.unints.metric +
                ADDRESS.keys.base +
                ADDRESS.keys.key
            )

            if (!response.ok) {
              throw await response.json()
            }
            const data = await response.json()
            return dispatch(userLocation(data))
          } catch (error) {
            rejectWithValue(dispatch(setError(error)))
          }
        }
      )
    } else {
      dispatch(setError({ code: 0, message: "Don't have geolocation" }))
    }
  }
)
const Weather = createSlice({
  name: "weather",
  initialState: {
    user: {
      location: {},
      load: false,
      errors: "",
    },
    search: "",
    searchLocation: {
      locations: {},
      load: false,
      errors: "",
    },
    currentCity: {
      location: {},
      load: false,
      errors: "",
    },
  },
  reducers: {
    searchCity(state, action) {
      state.search = action.payload
    },
    userLocation(state, action) {
      state.user.load = true
      state.user.location = action.payload
      state.user.errors = ""
    },
    setError(state, action) {
      state.user.errors = action.payload
    },
  },
  extraReducers: {
    [findLocation.fulfilled]: (state, action) => {
      state.searchLocation.load = true
      state.searchLocation.locations = action.payload
      state.search = ""
      state.searchLocation.errors = ""
    },
    [findLocation.rejected]: (state, action) => {
      state.searchLocation.errors = action.payload
      state.searchLocation.load = false
    },
    [setCurrent.fulfilled]: (state, action) => {
      state.currentCity.load = true
      state.currentCity.location = action.payload
      state.currentCity.error = ""
    },
    [setCurrent.rejected]: (state, action) => {
      state.currentCity.error = action.payload
      state.currentCity.load = false
    },
    [currentPosition.fulfilled]: (state, action) => {},
    [currentPosition.rejected]: (state, action) => {},
  },
})
export const { searchCity, userLocation, setError, changeBackground } =
  Weather.actions
export default Weather.reducer
