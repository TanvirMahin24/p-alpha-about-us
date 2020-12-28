import React from "react";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";
import styles from "./AboutUs.module.scss";
import bgImg from "../asset/img/parallaxBg.png";

const ParallaxSection = () => {
  return (
    <Parallax bgImage={bgImg} strength={100} bgImageAlt="Parallax background">
      <Container fluid className={styles.parallax}>
        <Container>
          <h1 className="text-white">
            "Try not to become a <br /> man of success. Rather
            <br /> become a man of
            <br /> value."- Albert Einstein
          </h1>
        </Container>
      </Container>
    </Parallax>
  );
};

export default ParallaxSection;
