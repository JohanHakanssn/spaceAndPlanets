import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="spaceAndPlanets/" element={<Home />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
