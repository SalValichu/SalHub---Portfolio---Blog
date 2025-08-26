
import Nav from "./Nav";
import { useState, useEffect } from "react";
// import { Particles } from "@tsparticles/react";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default function Header({ darkMode, setDarkMode }) {
  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {
    const interval = setInterval(() => setGreeting(getGreeting()), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
  <header className={`relative w-full shadow-2xl py-8 px-6 flex flex-col items-center gap-4 md:flex-row md:justify-between md:items-center overflow-hidden border-b border-white/10 ${darkMode ? "bg-black bg-opacity-95" : "bg-white bg-opacity-90"}`}>
      {/* Animated black/white logo area */}
  <div className={`relative z-10 flex items-center gap-4 ${darkMode ? "bg-white/5" : "bg-black/5"} backdrop-blur-lg rounded-xl px-6 py-3 shadow-lg transition-all duration-300 ${darkMode ? "hover:bg-white/10" : "hover:bg-black/10"}`}>
        <div className="w-12 h-12 flex items-center justify-center animate-cube-spin">
          {/* Minimal cube logo, animated */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="8" width="24" height="24" rx="6" fill="#fff" stroke="#222" strokeWidth="2" />
            <rect x="14" y="14" width="12" height="12" rx="3" fill="#222" />
          </svg>
        </div>
  <h1 className={`text-3xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-black"} drop-shadow-lg transition-colors duration-300`}>SalHub</h1>
      </div>
      <div className="relative z-10 flex flex-col items-center md:items-end gap-2 w-full md:w-auto">
        <span className={`text-lg font-semibold ${darkMode ? "text-white/80" : "text-black/80"} drop-shadow-sm`}>{greeting} 👋</span>
  <Nav darkMode={darkMode} />
      </div>
      {/* Dark/Light mode toggle */}
      <button
        className={`absolute top-4 right-4 z-20 rounded-full p-2 shadow-lg transition-colors duration-300 border-2 ${darkMode ? "bg-gray-900 border-gray-700 hover:bg-gray-800" : "bg-white border-gray-300 hover:bg-gray-100"}`}
        onClick={() => setDarkMode((d) => !d)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="5" fill="currentColor" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66l-.71.71M4.05 4.05l-.71.71M21 12h-1M4 12H3m16.24 4.24l-.71-.71M6.34 19.66l-.71-.71" /></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="5" fill="currentColor" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" /></svg>
        )}
      </button>
      {/* Cube spin animation */}
      <style>{`
        @keyframes cube-spin {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
          100% { transform: rotateY(360deg); }
        }
        .animate-cube-spin {
          animation: cube-spin 2.5s cubic-bezier(.4,0,.2,1) infinite;
        }
      `}</style>
    </header>
  );
}