import { configureStore } from "@reduxjs/toolkit"

import Weather from "../reducers/weather"

export const store = configureStore({
  reducer: {
    weather: Weather,
  },
})
