import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { QuestionCircle, Person, List } from 'react-bootstrap-icons';
import logo from '../assets/img/logo.png';
import './NavBar.css';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('portfolio');
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace('/', '');
    setActiveLink(path || 'portfolio');
  }, [location]);

  return (
    <Navbar className="custom-navbar" expand="lg" expanded={expanded}>
      <Container fluid className="px-4">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="KitaPo" className="navbar-logo" />
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
          className="custom-toggler"
        >
          <List size={24} />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="main-nav me-auto">
            <Nav.Link
              as={Link}
              to="/portfolio"
              className={activeLink === 'portfolio' ? 'active' : ''}
              onClick={() => setExpanded(false)}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/transactions"
              className={activeLink === 'transactions' ? 'active' : ''}
              onClick={() => setExpanded(false)}
            >
              Transactions
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/market"
              className={activeLink === 'market' ? 'active' : ''}
              onClick={() => setExpanded(false)}
            >
              Market
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/settings"
              className={activeLink === 'settings' ? 'active' : ''}
              onClick={() => setExpanded(false)}
            >
              Settings
            </Nav.Link>
          </Nav>
          
          <div className="nav-right">
            <Nav.Link href="#" className="icon-link">
              <QuestionCircle size={20} />
            </Nav.Link>
            <Nav.Link href="#" className="icon-link ms-3">
              <Person size={20} />
            </Nav.Link>
            <div className="user-profile ms-3">
              EN
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
