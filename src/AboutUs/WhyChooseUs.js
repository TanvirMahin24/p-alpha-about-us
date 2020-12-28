import React from "react";
import styles from "./AboutUs.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const WhyChooseUs = () => {
  return (
    <div>
      <h1 className="text-center pb-md-4">Why Choose us</h1>
      <Container className={styles.worldImg}>
        <Row className="text-center py-5">
          <Col>
            <h1 className="display-2 font-weight-bolder">1058+</h1>
            <h3 className="font-weight-lighter">Learners</h3>
          </Col>
          <Col>
            <h1 className="display-2 font-weight-bolder">50+</h1>
            <h3 className="font-weight-lighter">Courses</h3>
          </Col>
          <Col>
            <h1 className="display-2 font-weight-bolder">13+</h1>
            <h3 className="font-weight-lighter">Projects</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
