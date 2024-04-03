import sleeve from "../../images/reward/sleeve.jpg";
import css from "./Reward.module.css";

const Reward = () => {
  return (
    <section className={css.section}>
      <h2>Символ незламності - гільза за донат</h2>
      <div className={css.block}>
        <div className={css.text}>
          <p>
            Ворога зупиняє наш гнів. Його доставляють кулі. <br />
            Мама молодого Героя - розписує гільзи від нашого гніву. ЇЇ син
            другий рік стоїть першим на шляху ворога, захищаючи наш з вами світ
            від пітьми.
          </p>
          <p>
            Ця гільза з поля бою з ручним розписом - символ спустошених війною
            душ. Неймовірно відважна мама загортає їх в яскраві та теплі фабри.{" "}
          </p>
          <p>
            Відправивши донат від 500 грн, залиш свої дані в коментарі при
            переказі, і ти матимеш можливість отримати в подарунок цей
            унікальний символ незламності.
          </p>
        </div>
        <div className={css.img_container}>
          <img className={css.img} src={sleeve} alt="Sleeves" />
        </div>
      </div>
    </section>
  );
};

export default Reward;
