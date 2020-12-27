import React from "react";
import styles from "./Nav.module.scss";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../asset/img/AiS-Logo--Right-Side-(Solid-Ash).png";
import cartIcon from "../../asset/img/cartIcon.png";
import searchIcon from "../../asset/img/searchIcon.png";
import dotsIcon from "../../asset/img/dotsIcon.png";

const NavbarSection = () => {
  return (
    <div className={styles.nav}>
      <Navbar bg="light" expand="lg" className="w-100">
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className={styles.nav__logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link href="#!">HOME</Nav.Link>
            <Nav.Link href="#" active>
              ABOUT
            </Nav.Link>
            <Nav.Link href="#!">COURSES</Nav.Link>
            <Nav.Link href="#!">CONTACT</Nav.Link>
          </Nav>
          <div className={styles.icon__section}>
            <a href="#!">
              <img src={searchIcon} alt="" />
            </a>
            <a href="#!">
              <img src={cartIcon} alt="" />
            </a>
            <a href="#!">
              <img src={dotsIcon} alt="" />
            </a>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarSection;
