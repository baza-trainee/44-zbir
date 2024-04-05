import css from './Progress.module.css';
import progress_element from '../../images/status-bar/progress_element.png';


const Progress = ({ balance }) => {
	function createElementsProgress(balance) {
	
	const w = document.documentElement.clientWidth;
	let progress = 50;
	if (w < 650) {
		progress = Math.floor(w * 0.074);
	}

	let num = (balance / 1000).toFixed() < 1 ? 0 : (balance / 1000).toFixed();
	if (num > 50) {
		num = 50;
		}
		
	const elements = [];
	for (let i = 0; i <= ((progress / 50) * num); i++) {
		elements.push(<img className={css.progress_img} key={i * 15} src={progress_element} alt="progress element" />);
	}
	return elements;
}
console.log(document.documentElement.clientWidth);
  return <div className={css.progress}>{createElementsProgress(balance)}</div>;
};
export default Progress;