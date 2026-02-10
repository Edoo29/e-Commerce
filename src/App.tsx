import "./App.css";
import Hero from "./components/Hero";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Modal />
      <Navbar />
      <Hero />
    </>
  );
};

export default App;
