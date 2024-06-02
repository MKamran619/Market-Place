import "./assests/styles/styles.css";
import "./assests/styles/utilities.css";
import Home from "./components/pages/dashboard/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
