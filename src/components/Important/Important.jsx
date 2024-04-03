import css from "./Important.module.css";

const importantList = [
  { title: "Авто - це швидкий та мобільний вихід на позиції" },
  { title: "Авто - це потужний та надійний засіб доставки зброї" },
  { title: "Авто - це бойовий побратим, який допомагає рятувати життя" },
];

const Important = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>Чому це важливо</h2>
        <ul className={css.list}>
          {importantList.map((item, index) => {
            return (
              <li className={css.item} key={index}>
                <img className={css.img} src="" alt="Фото авто" />
                <p className={css.text}>{item.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Important;
