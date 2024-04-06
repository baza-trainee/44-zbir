import css from './StatusBar.module.css';
import { useEffect, useState } from 'react';
import DonationBtn from '../DonationBtn/DonationBtn';
import fetchJarBalance  from '../../helpers/fetchJarBalance';
import Progress from '../Progress/Progress';
import thousandSeparator from '../../helpers/separator';


const StatusBar = () => {
	const [balance, setBalance] = useState(0);
	// Оновлення прогресу кожну хвилину.
	useEffect(() => {
		fetchJarBalance(setBalance);
		// const balance_update = setInterval(() => {
		// 	fetchJarBalance(setBalance);
		// 	console.log('cost');
		// }, 60000);
		// return () => {
		// 	clearInterval(balance_update);
		// };
	}, []);

	// !!!start Після вдалих тестів видалити.
	const [isOpenTestModal, setIsOpenTestModal] = useState(false);

	function testInput(event) {
		if (event.target.value >= 0) {
			setBalance(+event.target.value);
		} else setBalance(0);
		if (event.target.value <= 200000) {
			setBalance(+event.target.value);
		} else setBalance(50000);
	}
	// !!! end Після вдалих тестів видалити.
	return (
		<section className={css.section_status_bar}>
			<h2
				className={css.title}
				// !!!start Після вдалих тестів видалити onClick.
				onClick={() => {
					setIsOpenTestModal(!isOpenTestModal);
				}}
			>
				Зроби свій внесок, приєднуйся до командного збору
			</h2>
			<div className={css.description}>
				<div className={css.amount}>
					<h3 className={css.description_title}>Вже зібрано</h3>
					<p className={css.description_text}>{thousandSeparator(balance)} грн</p>
				</div>
				<div className={css.goal}>
					<h3 className={css.description_title}>Наша мета</h3>
					<p className={css.description_text}>50 000 грн</p>
				</div>
			</div>
			<Progress balance={balance} />
			<DonationBtn />

			{/* !!!start Після вдалих тестів видалити.*/}
			{isOpenTestModal && (
				<div className={css.test_bloc__section_status_bar}>
					<label htmlFor="test">Тимчасовий інпут тест status bar</label>
					<input onInput={testInput} type="number" id="test" min={0} max={60000} defaultValue={0} />
				</div>
			)}
			{/* !!! end Після вдалих тестів видалити. */}
		</section>
	);
};

export default StatusBar;