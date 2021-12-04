import { Card, Row, Col, Badge } from "react-bootstrap"
import { Link } from "react-router-dom"
import { ADDRESS } from "../app/constants"
import styles from "../assets/styles/city-card.module.css"

const CityCard = ({ city }) => {
  return (
    <Card className={styles.direction}>
      <Row>
        <Col xs="3" sm="2" md="auto">
          <Card.Img
            className={styles.small_img}
            src={
              ADDRESS.img.base +
              city.weather[0].icon +
              ADDRESS.img.x2 +
              ADDRESS.img.type
            }
          />
        </Col>

        <Col className={styles.info}>
          <Card.Title>
            <Row>
              <Col md="auto" xs="9" sm="10">
                <Link to={`/${city.name}/${city.id}`} className={styles.link}>
                  {city.name},&nbsp;{city.sys.country}
                </Link>
                &nbsp;
                {city.weather[0].description}
              </Col>
            </Row>
          </Card.Title>
          <Card.Body>
            <Row>
              <Col md="12" xs="12" className={styles.bottom_margin}>
                <Badge bg="secondary">{city.main.temp}&#8451;</Badge>
                &nbsp;
                <span className={styles.norm_font}>
                  temperature from {city.main.temp_min} to {city.main.temp_max}
                  &#8451;, wind {city.wind.speed}m/s. clouds {city.clouds.all}%.
                </span>
              </Col>
              <Col md="12" xs="12">
                <span className={styles.norm_font}>
                  Geo coords {`[${city.coord.lat} ${city.coord.lon}]`}
                </span>
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default CityCard
