import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { currentPosition } from "./app/reducers/weather"
import Routing from "./conteiners/Routing"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(currentPosition())
    // eslint-disable-next-line
  }, [])
  return (
    <div className="App">
      <Routing />
    </div>
  )
}

export default App
