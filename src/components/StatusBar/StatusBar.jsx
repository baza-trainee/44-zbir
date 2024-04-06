import css from './StatusBar.module.css';
import { useState } from 'react';
import cartridge from '../../images/status-bar/cartridge.svg';
import DonationBtn from '../DonationBtn/DonationBtn';

// import { fetchAccountBalance } from '../../helpers/fetchAccountBalance';

// Функція розділяє великі числа на тисячи пробілами та міняє крапку на кому 
function thousandSeparator(num) {
  const str = String(num.toFixed());
	const reg = /\d{1,3}(?=(\d{3})+(?!\d))/g;
	if (str === '') {
		return '0';
	} else return str.replace(reg, '$& ').replace(/\./g, ',');
}

function createElementsIndicator(cost) {
  let num = (cost / 1000).toFixed() < 1 ? 0 : (cost / 1000).toFixed();
  if (num > 50) {
    num = 50
	}
	const elements = [];
	for (let i = 0; i <= num; i++) {
		elements.push(<img className={css.item_img} key={i * 15} src={cartridge} alt="cartridge" />);
	}
	return elements;
}

const StatusBar = () => {
	const [cost, setCost] = useState(0);

	return (
		<section className={css.section_status_bar}>
			<h2 className={css.title}>Зроби свій внесок, приєднуйся до командного збору</h2>
			<div className={css.description}>
				<div>
					<h3>Вже зібрано</h3>
					<p>{thousandSeparator(cost)} грн</p>
				</div>
				<div>
					<h3>Наша мета</h3>
					<p>50 000 грн</p>
				</div>
			</div>
			<div className={css.indicator}>{createElementsIndicator(cost)}</div>
			<DonationBtn/>
		</section>
	);
};

export default StatusBar;