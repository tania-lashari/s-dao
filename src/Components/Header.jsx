import React, { useRef } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/d-standard.png";
import AppButton from "./AppButton";

const Header = () => {
  const handleApply = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfTnLWgZcJfb1OHdHfR9bxmO7SB564EUJk0WgrSJ4KEmP7e1Q/viewform"
    );
  };
  return (
    <Navbar expand="lg" className="header">
      <Container fluid>
        <Navbar.Brand href="#" className="navbar__logo">
          <img src={logo} className="logo__img" />
        </Navbar.Brand>
        <div className="button--presale">
          <AppButton onClick={handleApply} title="Apply for Presale" />
        </div>
        {/* <div className="header__right"> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0 navbar__collapse"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <Nav.Link className="collapse__link" href="#">
              Roadmap
            </Nav.Link>
            <Nav.Link
              className="collapse__link"
              href="https://docs.standarddao.finance/"
            >
              Docs
            </Nav.Link>
            <Nav.Link className="collapse__link">How It Works</Nav.Link>
            <Nav.Link
              className="collapse__link"
              href="https://docs.standarddao.finance/ecosystem-growth/links"
            >
              Connect
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="button--presale-desktop">
          <AppButton onClick={handleApply} title="Apply for Presale" />
        </div>

        {/* </div> */}
      </Container>
    </Navbar>
  );
};

export default Header;
