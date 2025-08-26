import { useNavigate } from "react-router-dom";
import { FaHome, FaBriefcase, FaBlog, FaEnvelope } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

export default function Footer({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const navItems = [
    { icon: <FaHome />, path: "/" },
    { icon: <FaBriefcase />, path: "/portfolio" },
    { icon: <FaBlog />, path: "/blog" },
    { icon: <FaEnvelope />, path: "/contact" },
  ];
  const handleModeSwitch = () => {
    setDarkMode(prev => !prev);
  };
  return (
    <footer className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-auto">
      <nav
        className="flex justify-center items-center gap-4 px-8 py-3 rounded-full shadow-lg backdrop-blur-md border"
        style={{
          background: darkMode ? "rgba(30,30,30,0.85)" : "rgba(255,255,255,0.85)",
          boxShadow: darkMode ? "0 4px 32px rgba(0,0,0,0.25)" : "0 4px 32px rgba(0,0,0,0.10)",
          border: darkMode ? "1px solid rgba(255,255,255,0.10)" : "1px solid rgba(0,0,0,0.10)",
        }}
      >
        {/* Page icons */}
        {navItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => navigate(item.path)}
            className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 focus:outline-none"
            style={{
              background: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
              border: "none",
              color: darkMode ? "#FAFAFA" : "#222",
              fontSize: "2rem",
              transition: "transform 0.22s cubic-bezier(.4,0,.2,1), background 0.18s",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.18)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            {item.icon}
          </button>
        ))}
        {/* Separator */}
        <span style={{margin: "0 1.2rem", fontWeight: 400, opacity: 0.3, fontSize: "2rem"}}>|</span>
        {/* Mode switcher (navbar only) */}
        <button
          onClick={handleModeSwitch}
          className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 focus:outline-none"
          style={{
            background: "none",
            border: "none",
            color: darkMode ? "#FAFAFA" : "#222",
            fontSize: "2rem",
            transition: "transform 0.22s cubic-bezier(.4,0,.2,1), background 0.18s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "scale(1.18)";
            e.currentTarget.style.background = darkMode ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.18)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.background = darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
          }}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </footer>
  );
}