import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Portifolio from "./pages/Portifolio/Portifolio";
import Form from "./pages/Form/Form";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Portifolio />} />
        <Route path="/cadastro" element={<Form />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
