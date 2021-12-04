import { Container, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux"
import CityCard from "./CityCard"
import Search from "../conteiners/Search"
import styles from "../assets/styles/search-page.module.css"

const SearchPage = () => {
  const result = useSelector((state) => state.weather.searchLocation)
  return (
    <Container className={styles.wrapper} fluid>
      <Container className={styles.padding_top}>
        <Row>
          <Col md={{ offset: 3 }} className={styles.bottom_border}>
            <h2 className={result.errors ? styles.error : null}>Find city</h2>
          </Col>
        </Row>
      </Container>
      <Search />
      <Container>
        {result.load ? (
          result.locations.list.map((item) => {
            return <CityCard city={item} key={item.id} />
          })
        ) : result.errors ? (
          <Row>
            <Col md={{ offset: 3 }} className={styles.error}>
              {result.errors.message}
            </Col>
          </Row>
        ) : null}
      </Container>
    </Container>
  )
}
export default SearchPage
