import styles from "./DonationBtn.module.css";

const DonationBtn = () => {
  return (
    <a href="/" target="_blank" rel="noopener noreferrer">
      <button className={styles.helpLink}>Допомогти</button>
    </a>
  );
};

export default DonationBtn;
