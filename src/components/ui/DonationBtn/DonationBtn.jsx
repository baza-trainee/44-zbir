import styles from "./DonationBtn.module.css";

const DonationBtn = () => {
  return (
    <a href="/" target="_blank" rel="noopener noreferrer">
      <button className={styles.donationBtn}>Допомогти</button>
    </a>
  );
};

export default DonationBtn;
