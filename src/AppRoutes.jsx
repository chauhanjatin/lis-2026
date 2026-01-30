import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Cashstudy from "./pages/Cashstudy";
import Contactus from "./pages/Contactus";
import Career from "./pages/Career";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
      <Route path="/case-study" element={<Cashstudy />} />
      <Route path="/contact" element={<Contactus />} />
      <Route path="/career" element={<Career />} />
    </Routes>
  );
}
