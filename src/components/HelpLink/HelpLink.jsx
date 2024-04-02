import React, { useState } from "react";
import styles from "./HelpLink.module.css";

const HelpLink = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleLinkClick = () => {
    setIsPressed(true);
  };

  const handleLinkRelease = () => {
    setIsPressed(false);
  };

  return (
    <a href="/" target="_blank" rel="noopener noreferrer">
      <button
        className={`${styles.helpLink} ${isPressed ? styles.active : ""}`}
        onMouseDown={handleLinkClick}
        onMouseUp={handleLinkRelease}
        onMouseLeave={handleLinkRelease}
      >
        Допомогти
      </button>
    </a>
  );
};

export default HelpLink;
