import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import FeatureCard from "../shared/FeatureCard/FeatureCard";
import styles from "./AboutUs.module.scss";
import badgeImg from "../asset/img/badge.png";
import infinityImg from "../asset/img/infinity.png";
import tvImg from "../asset/img/television.png";

const FeaturesSection = () => {
  return (
    <div className={`${styles.features} py-5`}>
      <Container>
        <h1 className="text-center pb-4">Our exclusive features</h1>
        <Row>
          <Col>
            <FeatureCard title="Full lifetime access" image={infinityImg} />
          </Col>
          <Col>
            <FeatureCard title="Certificate of completion" image={badgeImg} />
          </Col>
          <Col>
            <FeatureCard title="Access on mobile and TV" image={tvImg} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturesSection;
