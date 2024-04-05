import css from './Progress.module.css';
import progress_element from '../../images/status-bar/progress_element.png';


const Progress = ({ balance }) => {
function createElementsProgress(balance) {
	let num = (balance / 1000).toFixed() < 1 ? 0 : (balance / 1000).toFixed();
	if (num > 50) {
		num = 50;
	}
	const elements = [];
	for (let i = 0; i <= 50; i++) {
		elements.push(<img className={css.progress_img} key={i * 15} src={progress_element} alt="progress element" />);
	}
	return elements;
}

  return <div className={css.progress}>{createElementsProgress(balance)}</div>;
};
export default Progress;