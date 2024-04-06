import css from './StatusBar.module.css';
import { useState } from 'react';
import DonationBtn from '../DonationBtn/DonationBtn';
import thousandSeparator from '../../helpers/separator';
import createElementsIndicator from '../../helpers/elementsIndicator';

// import { fetchAccountBalance } from '../../helpers/fetchAccountBalance';

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
			<DonationBtn />
		</section>
	);
};

export default StatusBar;