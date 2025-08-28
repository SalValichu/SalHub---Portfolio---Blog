import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Loader from "./components/Loader";


import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>

      <Loader show={loading} />
      <div className={darkMode ? "dark bg-gray-950 text-white min-h-screen" : "bg-gray-50 text-gray-900 min-h-screen"}>
        <Header darkMode={darkMode} />
        <main className="pt-4 pb-24">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/portfolio" element={<Portfolio darkMode={darkMode} />} />
            <Route path="/blog" element={<Blog darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          </Routes>
        </main>
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </Router>
  );
}

export default App;