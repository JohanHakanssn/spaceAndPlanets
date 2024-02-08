import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Info from "./pages/info";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="Home" element={<Home />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
          <Route path="Info" element={<Info />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
