import { useState } from "react";
import css from "./ModalShare.module.css";

const ModalShare = ({ closeModal }) => {
  const [isCopyText, setIsCopyText] = useState(false);

  const url = window.location.href;
  //   const title = document.title;

  const handleShare = (socialMedia) => {
    let shareUrl = "";

    switch (socialMedia) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "telegram":
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      default:
        console.log("Ця функція не підтримується в цьому браузері");
        break;
    }
    return shareUrl;
  };

  const onClick = () => {
    setIsCopyText(true);
    setTimeout(() => {
      setIsCopyText(false);
    }, 5000);
  };

  return (
    <div className={css.wrapper}>
      <button className={css.buttonClose} onClick={closeModal}>
        X
      </button>
      <h3 className={css.header}> Поділіться сайтом з друзями!</h3>
      <h4 className={css.text}>
        Надішліть посилання на сайт через cоціальні мережі
      </h4>
      <ul className={css.list}>
        <li>
          <a href={handleShare("telegram")}>t</a>
        </li>
        <li>
          <a href={handleShare("facebook")}>f</a>
        </li>
        <li>
          <a href={handleShare("linkedin")}>in</a>
        </li>
      </ul>
      <p className={css.text}> або скопіюйте лінк</p>

      <button className={css.copyButton} type="button" onClick={onClick}>
        Скопіювати посилання
        {isCopyText ? <p>v</p> : <p>x</p>}
      </button>
    </div>
  );
};

export default ModalShare;
