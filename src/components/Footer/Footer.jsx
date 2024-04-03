import css from "./Footer.module.css";

import { useState } from "react";
import Modal from "react-modal";

import ModalShare from "../ModalShare/ModalShare";

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  return (
    <section className={css.sectionFooter}>
      <p className={css.text}>Допоможи іншим дізнатись про наш збір</p>
      <div className={css.wrapper}>
        <button className={css.button} type="button" onClick={openModal}>
          Поділитися
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="A modal window for sharing information in a social network."
          className={css.styledModal}
          overlayClassName={css.modalOverlay}
        >
          <ModalShare closeModal={closeModal} />
        </Modal>
      </div>
      <p className={css.textBaza}>
        Розробка Baza Trainee Ukraine 2024 <br />© Всі права захищені
      </p>
    </section>
  );
};

export default Footer;
