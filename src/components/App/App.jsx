import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import StatusBar from '../StatusBar/StatusBar';
import About from '../About/About';
import Important from '../Important/Important';
import Reward from '../Reward/Reward';
import Footer from '../Footer/Footer';
// import ReturnBtn from '../ui/ReturnBtn/ReturnBtn';
// import ShareButton from '../ui/ShareButton/ShareButton';
// import DonationBtn from '../ui/DonationBtn/DonationBtn';
// import ModalShare from '../ModalShare/ModalShare';

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				{/* <DonationBtn /> */}
				<StatusBar />
				<About />
				<Important />
				<Reward />
			</main>
			<Footer />
			{/* <ReturnBtn/>
			<ModalShare />
			<ShareButton /> */}
		</>
	);
};

export default App;
