import Modal from "react-modal";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import DonationBtn from "./components/DonationBtn/DonationBtn";
import StatusBar from "./components/StatusBar/StatusBar";
import About from "./components/About/About";
import Important from "./components/Important/Important";
import Reward from "./components/Reward/Reward";
import Footer from "./components/Footer/Footer";
import ReturnBtn from "./components/ReturnBtn/ReturnBtn";

Modal.setAppElement("#root");

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <DonationBtn />
      <StatusBar />
      <About />
      <Important />
      <Reward />
      <Footer />
      <ReturnBtn />
    </>
  );
};

export default App;
