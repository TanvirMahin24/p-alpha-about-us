import React from "react";
import styles from "./SocialIcon.module.scss";

const SocialIcon = ({ icon }) => {
  return (
    <div className={styles.icon}>
      <a href="#!">
        <img src={icon} alt="" />
      </a>
    </div>
  );
};

export default SocialIcon;
