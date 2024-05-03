import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import About from "./containers/About";
import Services from "./containers/Services";
import Portfolio from "./containers/Portfolio";
import Blog from "./containers/Blog";
import Contact from "./containers/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
