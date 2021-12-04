import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Col, Container, Image, Row, Button } from "react-bootstrap"
import FormRange from "react-bootstrap/esm/FormRange"
import styles from "../assets/styles/city-page.module.css"
import { formatDate, getTime, setBackground } from "../app/utilts"
import { ADDRESS } from "../app/constants"

const CityPage = ({ city, link }) => {
  const [background, setBack] = useState(0)
  const navigate = useNavigate()
  useEffect(() => {
    setBack(city.main.temp)
    // eslint-disable-next-line
  }, [])

  const changeHandler = (ev) => {
    setBack(+ev.target.value)
  }

  const goBack = () => navigate(-1)

  return (
    <Container
      className={styles.wrapper}
      style={{
        backgroundColor: setBackground(background),
        backgroundImage: `url(${
          ADDRESS.img.base +
          city.weather[0].icon +
          ADDRESS.img.x4 +
          ADDRESS.img.type
        })`,
      }}
      fluid
    >
      <Container className={styles.inform} fluid>
        <Row>
          <Col>{formatDate(city.dt)}</Col>
        </Row>
        <Row>
          <Col>
            {city.name} {city.sys.country}
          </Col>
        </Row>
        <Row xs={2}>
          <Col md="auto" xs="auto" className={styles.padding_rigth}>
            <Image
              className={styles.small_imagen}
              src={
                ADDRESS.img.base +
                city.weather[0].icon +
                ADDRESS.img.x4 +
                ADDRESS.img.type
              }
              alt={city.weather[0].description}
            />
          </Col>
          <Col className={styles.padding_left}>
            <h3 className={styles.no_margin}>{city.main.temp}&#8451;</h3>
          </Col>
          <Col xs={12}>
            <span>
              Feels like&nbsp;&nbsp;{city.main.feels_like}&#8451;.&nbsp;
              {city.weather[0].description[0].toUpperCase() +
                city.weather[0].description.slice(1)}
              .
            </span>
          </Col>
          <Col md={10} xs={12}>
            <Container className={styles.content}>
              <Row>
                <Col md="auto">Wind speed {city.wind.speed}m/s</Col>
                <Col md="auto">Humidity {city.main.humidity}%</Col>
                {city.visibility ? (
                  <Col md={12}>Visibility {city.visibility / 1000}km</Col>
                ) : null}
                {city.sys.sunrise ? (
                  <Col md="auto">Sunrise at {getTime(city.sys.sunrise)}</Col>
                ) : null}
                {city.sys.sunset ? (
                  <Col md="auto">Sunset at {getTime(city.sys.sunset)}</Col>
                ) : null}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container className={styles.slider_wrapper} fluid>
        <Row>
          {link ? (
            <Col xs={3} md="auto">
              <Button onClick={goBack} variant="outline-secondary">
                Go back
              </Button>
            </Col>
          ) : null}
          <Col xs={{ span: 6, offset: 3 }} md={{ span: 6, offset: 3 }}>
            <FormRange
              className={styles.slider}
              value={background}
              min={-10}
              max={30}
              onChange={changeHandler}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default CityPage
