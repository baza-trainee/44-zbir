// import "./App.css";

// import logo from "./logo.svg";
import Page from "./component/page";
import Header from "./component/header";

function App() {
  const dataHeader = {
    menu: [
      {
        id: 11,
        name: "Мета",
        link: "www.test.com",
      },
      {
        id: 12,
        name: "Про бригаду",
        link: "www.test.com",
      },
      {
        id: 13,
        name: "Гільза за донат",
        link: "www.test.com",
      },
      {
        id: 14,
        name: "Чому це важливо",
        link: "www.test.com",
      },
    ],
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <Page>
      <Header list={dataHeader.menu} />
    </Page>
  );
}

export default App;
