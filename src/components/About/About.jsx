import React from "react";
import photo1 from "./img/photo1.jpg";
import photo2 from "./img/photo2.jpg";
import css from "./About.module.css";

const About = () => {
  return (
    <>
      <section className={css.sectionAbout}>
        <h2 className={css["about-title"]}>Про Бригаду</h2>
        <div className={css["about-content"]}>
          <div className={css["texts"]}>
            <div className={css["text"]}>
              <p>
                44-та окрема механізована бригада (44 ОМБр) — механізоване
                з'єднання Сухопутних військ Збройних сил України, сформоване 1
                березня 2023 р.
                <br /> 44 ОМБр - стала першою серед бригад ЗСУ, яка отримала на
                озброєння німецькі танки Leopard 1A5 і польські колісні Rosomak.
              </p>
            </div>
            <div className={css["text"]}>
              <p>
                З перших боїв біля Кремінної і до тепер - 44-та надає гідну
                відсіч ворогу. Кожен вихід на позиції - це боротьба за наші
                життя. Та під щільними обстрілами Воїни невтомно продовжують
                “руйнувати” позиції ворога. Кожного дня дають зрозуміти
                агресору, що означає гасло - “Наша доля, тільки воля!”
              </p>
            </div>
          </div>
          <div className={css["images"]}>
            <img className={css["image"]} src={photo1} />
            <img className={css["image"]} src={photo2} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
