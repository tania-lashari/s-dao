import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Components/styles.scss";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Footer />
    </div>
  );
};

export default App;
