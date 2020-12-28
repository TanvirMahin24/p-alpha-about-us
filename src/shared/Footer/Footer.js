import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialIcon from "../SocialIcon/SocialIcon";
import styles from "./Footer.module.scss";
import fbImg from "../../asset/img/fb.png";
import twitterImg from "../../asset/img/twitter.png";
import whatsAppImg from "../../asset/img/whatsApp.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container className="py-5">
        <Row>
          <Col md={7}>
            <Row>
              <Col>
                <ul>
                  <li>
                    <a href="#!">ISchool for recruiting</a>
                  </li>
                  <li>
                    <a href="#!">Teach on ischool</a>
                  </li>
                  <li>
                    <a href="#!">Get the app</a>
                  </li>
                  <li>
                    <a href="#!">About us</a>
                  </li>
                  <li>
                    <a href="#!">Contact us</a>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>
                    <a href="#!">Careers</a>
                  </li>
                  <li>
                    <a href="#!">Blog</a>
                  </li>
                  <li>
                    <a href="#!">Help and Support</a>
                  </li>
                  <li>
                    <a href="#!">Affiliate</a>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>
                    <a href="#!">Terms</a>
                  </li>
                  <li>
                    <a href="#!">Privacy policy and cookie policy</a>
                  </li>
                  <li>
                    <a href="#!">Sitemap</a>
                  </li>
                  <li>
                    <a href="#!">Featured courses</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={5} className="float-right text-right">
            <h3>
              One's <br /> Employment, Our <br /> Fame
            </h3>
            <div className="d-flex float-right">
              <SocialIcon icon={fbImg} />
              <SocialIcon icon={twitterImg} />
              <SocialIcon icon={whatsAppImg} />
            </div>
          </Col>
        </Row>
      </Container>
      <div className={styles.footer__credit}>
        <span className="mx-auto d-block py-4">www.amariSchool.com</span>
      </div>
    </div>
  );
};

export default Footer;
