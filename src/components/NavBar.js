import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Wallet2, BarChart, Clock, Gear } from 'react-bootstrap-icons';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('portfolio');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const path = location.pathname.replace('/', '');
    setActiveLink(path || 'portfolio');
  }, [location]);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span className="logo">KitaPo</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/portfolio"
              className={activeLink === 'portfolio' ? 'active' : ''}
            >
              <Wallet2 className="nav-icon" /> Portfolio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/market"
              className={activeLink === 'market' ? 'active' : ''}
            >
              <BarChart className="nav-icon" /> Market
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/transactions"
              className={activeLink === 'transactions' ? 'active' : ''}
            >
              <Clock className="nav-icon" /> Transactions
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/settings"
              className={activeLink === 'settings' ? 'active' : ''}
            >
              <Gear className="nav-icon" /> Settings
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
