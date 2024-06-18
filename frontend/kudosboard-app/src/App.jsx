import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="App">
      <section id="container">
        <header id="AppHeader">
          <Header />
        </header>
        <body id="AppBody">
          <Dashboard />
        </body>
      </section>

      <footer id="AppFooter">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
