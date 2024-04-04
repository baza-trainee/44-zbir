import { ReactComponent as ShareImage } from "./share-nodes-outline.svg";
import styles from "./ShareButton.module.css";

const ShareButton = ({ onClick }) => {
  return (
    <button className={styles.shareButton} onClick={() => console.log("click")}>
      Поділитися
      <ShareImage className={styles.svg} />
    </button>
  );
};

export default ShareButton;
