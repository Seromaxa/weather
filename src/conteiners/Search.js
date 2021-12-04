import { Form, FormControl, Button, Row, Col } from "react-bootstrap"
import styles from "../assets/styles/form.module.css"
import { useDispatch, useSelector } from "react-redux"
import { findLocation, searchCity } from "../app/reducers/weather"

const Search = () => {
  const city = useSelector((state) => state.weather.search)
  const dispatch = useDispatch()
  const changeHandler = (ev) => {
    ev.preventDefault()
    dispatch(searchCity(ev.target.value))
  }
  const submitHandler = (ev) => {
    ev.preventDefault()
    dispatch(findLocation())
  }

  return (
    <Form className={styles.form_conteiner} onSubmit={submitHandler}>
      <Row className={["justify-content-md-center", styles.centre_content]}>
        <Col className={[styles.no_padding, styles.col_margin]} xs={10} md={9}>
          <FormControl
            type="text"
            className={styles.form_input}
            onChange={changeHandler}
            value={city}
          />
        </Col>
        <Col className={styles.no_padding} xs={10} md={3}>
          <Button type="submit" className={styles.form_button}>
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default Search
