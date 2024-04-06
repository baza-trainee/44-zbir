import imageFirst from "../../images/important/image_1-1920-2x.jpg";
import imageSecond from "../../images/important/image_2-1920-2x.jpeg";
import imageThird from "../../images/important/image_3-1920-2x.jpeg";
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
              <div className={css.img_container}>
                <img className={css.img} src={item.src} alt="Фото авто" />
              </div>
              <p className={css.text}>{item.title}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Important;
