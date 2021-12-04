import CityPage from "../components/CityPage"
import { useSelector } from "react-redux"
import Loader from "../components/LoadingPage"

const HomePage = () => {
  const state = useSelector((state) => state.weather)

  return (
    <>
      {state.user.load ? <CityPage city={state.user.location} /> : <Loader />}
    </>
  )
}

export default HomePage
