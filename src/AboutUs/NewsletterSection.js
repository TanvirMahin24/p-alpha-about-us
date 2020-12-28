import React, { useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import styles from "./AboutUs.module.scss";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const subscribeHandeler = () => {
    if (!validateEmail(email)) {
      alert(`Please enter an valid Email address...`);
    } else {
      alert(`Your Email ${email} is subscribed...`);
      setEmail("");
    }
  };
  const validateEmail = (checkEmail) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(checkEmail).toLowerCase());
  };
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
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Button variant="dark" onClick={subscribeHandeler}>
                    SUBSCRIBE
                  </Button>
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
