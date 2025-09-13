import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Models({children}) {
  return (
    <div>
      <Header />

        {children}

      <Footer />
    </div>
  );
}
export default Models;
