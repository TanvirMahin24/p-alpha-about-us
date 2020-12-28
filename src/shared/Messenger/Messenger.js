import React from "react";
import img from "../../asset/img/messenger.png";
import styles from "./Messenger.module.scss";

const Messenger = () => {
  return (
    <div className={styles.messenger}>
      <a href="#!">
        <img src={img} alt="messenger" />
      </a>
    </div>
  );
};

export default Messenger;
