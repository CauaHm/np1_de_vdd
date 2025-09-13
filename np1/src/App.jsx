import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portifolio from "./pages/Portifolio/Portifolio";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Portifolio />
      </div>
      <Footer />
    </div>
  );
}
export default App;
