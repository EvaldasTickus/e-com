import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Store from "./pages/Store";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
