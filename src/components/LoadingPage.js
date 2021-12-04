import { Spinner, Container } from "react-bootstrap"
import styles from "../assets/styles/loader.module.css"

const Loader = () => {
  return (
    <Container className={styles.wrapper} fluid>
      <Spinner animation="grow" />
    </Container>
  )
}
export default Loader
