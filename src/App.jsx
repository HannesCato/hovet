import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Players from "./pages/Players";
import Contact from "./pages/Contact";
import Merch from "./pages/Merch";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/players" element={<Players />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/merch" element={<Merch />} />
      </Routes>
    </Router>
  );
}

export default App;
