import React, { useState } from "react";
import { ReactComponent as ShareImage } from "./share-nodes-outline.svg";
import styles from "./ShareButton.module.css";

const ShareButton = () => {
  const [isActive, setIsActive] = useState(false);
  const handleButtonClick = () => {
    setIsActive(!isActive);
  };
  return (
    <button className={styles.shareButton} onClick={handleButtonClick}>
      Поділитися
      <ShareImage className={styles.svg} />
    </button>
  );
};

export default ShareButton;
