import imageFirst from "../../images/important/image_1.jpg";
import imageSecond from "../../images/important/image_2.jpg";
import imageThird from "../../images/important/image_3.jpg";
import css from "./Important.module.css";

const importantList = [
  {
    title: "Авто - це швидкий та мобільний вихід на позиції",
    src: imageFirst,
  },
  {
    title: "Авто - це потужний та надійний засіб доставки зброї",
    src: imageSecond,
  },
  {
    title: "Авто - це бойовий побратим, який допомагає рятувати життя",
    src: imageThird,
  },
];

const Important = () => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>Чому це важливо</h2>
      <ul className={css.list}>
        {importantList.map((item, index) => {
          return (
            <li className={css.item} key={index}>
              <img className={css.img} src={item.src} alt="Фото авто" />
              <p className={css.text}>{item.title}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Important;
