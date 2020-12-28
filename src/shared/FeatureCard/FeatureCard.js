import React from "react";
import styles from "./FeatureCard.module.scss";

const FeatureCard = ({ image, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={image} alt="feature" />
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default FeatureCard;
