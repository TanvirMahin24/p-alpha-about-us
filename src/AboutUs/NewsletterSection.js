import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import styles from "./AboutUs.module.scss";

const NewsletterSection = () => {
  return (
    <div className="p-2 my-md-5 my-0 p-md-5">
      <Container>
        <Card body className="border__rounded shadow shadow-sm p-3">
          <Row>
            <Col>
              <h1>Subscribe for newsletter</h1>
              <p>
                Subscribe to our newsletter and we will bring you the latest
                news.
              </p>
            </Col>
            <Col className="my-auto">
              <Card className={styles.subscribe__card}>
                <Card.Body className="p-2 my-auto">
                  <div className={`${styles.subscribe__input} my-auto`}>
                    <input
                      type="text"
                      placeholder="Enter your mail address"
                      className="form-control my-auto"
                    />
                  </div>
                  <Button variant="dark">SUBSCRIBE</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default NewsletterSection;
