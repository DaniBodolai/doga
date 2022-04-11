import { Navbar, Nav, Container,  } from 'react-bootstrap'
import {useEffect} from 'react'

function Navbarcomps() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/termekek">Termékek</Nav.Link>
            <Nav.Link href="/UjTermekek">Új-termék</Nav.Link>
            <Nav.Link href="/nevem">Bodolai Dániel</Nav.Link>    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
export default Navbarcomps;