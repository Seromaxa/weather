import { Container, Row, Col } from "react-bootstrap"
import { ReactComponent as Git } from "../assets/imagens/iconmonstr-github-1.svg"
import { NavLink, Outlet } from "react-router-dom"
import styles from "../assets/styles/layout.module.css"

const castLink = ({ isActive }) =>
  isActive ? [styles.nav_link, styles.active].join(" ") : styles.nav_link

const Layout = () => {
  return (
    <>
      <Container as="header" className={styles.header} fluid>
        <Container className={styles.logo}></Container>
        <Row as="nav" className="justify-content-md-center">
          <Col md="auto" xs="auto">
            <NavLink to="/" className={castLink}>
              Home
            </NavLink>
          </Col>
          <Col md="auto" xs="auto">
            <NavLink to="/search" className={castLink}>
              Search
            </NavLink>
          </Col>
        </Row>
      </Container>
      <Container as="main" fluid className={styles.main}>
        <Outlet />
      </Container>
      <Container as="footer" fluid className={styles.footer}>
        <a
          href="https://github.com/Seromaxa/weather"
          rel="noreferrer"
          target="_blank"
        >
          <Git />
        </a>
      </Container>
    </>
  )
}

export default Layout
