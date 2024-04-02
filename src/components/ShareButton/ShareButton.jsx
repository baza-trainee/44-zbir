import { ReactComponent as ShareImage } from "./share-nodes-outline.svg";
import styles from "./ShareButton.module.css";

const ShareButton = () => {
  return (
    <button className={styles.shareButton}>
      Поділитися
      <ShareImage className={styles.svg} />
    </button>
  );
};

export default ShareButton;
