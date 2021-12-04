import { useState, useEffect } from "react"
import CityPage from "../components/CityPage"
import Loader from "../components/LoadingPage"
import { setCurrent } from "../app/reducers/weather"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"

const City = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { searchLocation, currentCity } = useSelector((state) => state.weather)
  const [curCity, setCurCity] = useState()

  useEffect(() => {
    dispatch(setCurrent(id))

    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (currentCity.load) {
      setCurCity(currentCity.location)
    } else {
      if (Array.isArray(searchLocation.locations.list)) {
        let buffer = searchLocation.locations.list.find(
          (item) => item.id === +id
        )
        setCurCity(buffer)
      }
      return
    }
    // eslint-disable-next-line
  }, [currentCity.load, currentCity.location])

  return <>{curCity ? <CityPage city={curCity} link={true} /> : <Loader />}</>
}

export { City }
