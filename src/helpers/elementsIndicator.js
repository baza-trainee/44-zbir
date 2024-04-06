import cartridge from '../images/status-bar/cartridge.svg';
import css from '../components/StatusBar/StatusBar.module.css';

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

export default createElementsIndicator;