import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="noise-overlay"></div>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
