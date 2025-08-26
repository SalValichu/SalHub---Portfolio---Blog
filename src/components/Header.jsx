
import Nav from "./Nav";
import { useState, useEffect } from "react";
// import { Particles } from "@tsparticles/react";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default function Header({ darkMode }) {
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