import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./app/Home";
import About from "./app/About";
import Services from "./app/Services";
import Contact from "./app/Contact";
import Navbar from "./app/Navbar";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-gray-50">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
