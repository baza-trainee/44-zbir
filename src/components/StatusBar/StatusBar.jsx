import css from './StatusBar.module.css';
import { useEffect, useState } from 'react';
import DonationBtn from '../DonationBtn/DonationBtn';
import { fetchJarBalance } from '../../helpers/fetchJarBalance';
import Progress from '../Progress/Progress';

// Функція розділяє великі числа на тисячи пробілами та міняє крапку на кому 
function thousandSeparator(num) {
  const str = String(num.toFixed());
	const reg = /\d{1,3}(?=(\d{3})+(?!\d))/g;
	if (str === '') {
		return '0';
	} else return str.replace(reg, '$& ').replace(/\./g, ',');
}

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
	
	// !!! Після вдалих тестів видалити.
	const [isOpenTestModal, setIsOpenTestModal] = useState(false);

	function testInput(event) {
		if (event.target.value >= 0) {
			setBalance(+event.target.value);
		} else setBalance(0);
		if (event.target.value <= 200000) {
			setBalance(+event.target.value);
		} else setBalance(50000);
	}

	return (
		<section className={css.section_status_bar}>
			<h2
				className={css.title}
				onClick={() => {
					setIsOpenTestModal(!isOpenTestModal);
				}}
			>
				Зроби свій внесок, приєднуйся до командного збору
			</h2>
			<div className={css.description}>
				<div>
					<h3>Вже зібрано</h3>
					<p>{thousandSeparator(balance)} грн</p>
				</div>
				<div>
					<h3>Наша мета</h3>
					<p>50 000 грн</p>
				</div>
			</div>
			<Progress balance={balance}/>
			<DonationBtn />

			{/* !!! Після вдалих тестів видалити.*/}
			{isOpenTestModal && (
				<div className={css.test_bloc__section_status_bar}>
					<label htmlFor="test">Тимчасовий інпут тест status bar</label>
					<input onInput={testInput} type="number" id="test" min={0} max={60000} defaultValue={0} />
				</div>
			)}
		</section>
	);
};

export default StatusBar;