import { Container, Badge, Nav, NavItem } from "react-bootstrap/"
import Navbar from "react-bootstrap/Navbar"
import { Link } from 'react-router-dom'

function NavUs({ badge }) {
  return (
    <Navbar bg="light" expand="lg" >
      <Container>
        <Link to="/">
        <Navbar.Brand>Scorpion-Shop</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-decoration-none  d-flex gap-4">
           <Link to="/">
           <Nav.Item >Home</Nav.Item>
           </Link>
          <Link to="/store">
          <Nav.Item>
             Store
              {" "}
              <Badge bg="secondary">{badge}</Badge>
            </Nav.Item>
          </Link>
          </Nav>
  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavUs
