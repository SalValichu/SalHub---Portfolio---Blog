import { useNavigate } from "react-router-dom";
import { FaHome, FaBriefcase, FaBlog, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate();
  const navItems = [
    { icon: <FaHome />, path: "/" },
    { icon: <FaBriefcase />, path: "/portfolio" },
    { icon: <FaBlog />, path: "/blog" },
    { icon: <FaEnvelope />, path: "/contact" },
  ];
  // Detect dark mode from body background
  const isDark = document.body.style.background === "#000";
  return (
    <footer className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-auto">
      <nav
        className="flex justify-center items-center gap-2 px-4 py-2 rounded-full shadow-lg backdrop-blur-md border"
        style={{
          background: isDark ? "rgba(30,30,30,0.85)" : "rgba(255,255,255,0.85)",
          boxShadow: isDark ? "0 4px 32px rgba(0,0,0,0.25)" : "0 4px 32px rgba(0,0,0,0.10)",
          border: isDark ? "1px solid rgba(255,255,255,0.10)" : "1px solid rgba(0,0,0,0.10)",
        }}
      >
        {navItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => navigate(item.path)}
            className="flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200 focus:outline-none"
            style={{
              background: "none",
              border: "none",
              color: isDark ? "#fff" : "#222",
              fontSize: "1.5rem",
              transition: "transform 0.18s cubic-bezier(.4,0,.2,1), background 0.18s",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.18)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            {item.icon}
          </button>
        ))}
      </nav>
    </footer>
  );
}