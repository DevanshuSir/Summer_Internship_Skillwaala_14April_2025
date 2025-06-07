import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./webpage/HomePage";
import AboutPage from "./webpage/AboutPage";
import Navbar from "./webpage/Navbar";
import Footer from "./webpage/Footer";
import Data from "./webpage/Data";
import SingleData from "./webpage/SingleData";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/data" element={<Data />} />
          <Route path="/single/:datakey" element={<SingleData />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
