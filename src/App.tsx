import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./containers/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
