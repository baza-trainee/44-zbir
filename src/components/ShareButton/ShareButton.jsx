import React, { useState } from "react";
import { ReactComponent as ShareImage } from "./share-nodes-outline.svg";
import styles from "./ShareButton.module.css";

const ShareButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleLinkClick = () => {
    setIsPressed(true);
  };

  const handleLinkRelease = () => {
    setIsPressed(false);
  };
  return (
    <button
      className={`${styles.shareButton} ${isPressed ? styles.active : ""}`}
      onMouseDown={handleLinkClick}
      onMouseUp={handleLinkRelease}
      onMouseLeave={handleLinkRelease}
    >
      Поділитися
      <ShareImage className={styles.svg} />
    </button>
  );
};

export default ShareButton;
