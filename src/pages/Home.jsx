import React from "react";
import MouseTrailParticles from "../components/MouseTrailParticles";
import { useNavigate } from "react-router-dom";

export default function Home({ darkMode }) {
    const navigate = useNavigate();
    React.useEffect(() => {
        document.body.style.background = darkMode ? "#111" : "#f7f7f7";
        document.body.style.transition = "background 0.3s";
        return () => {
            document.body.style.background = "";
            document.body.style.transition = "";
        };
    }, [darkMode]);
    return (
        <main className={`flex flex-col items-center justify-center min-h-[70vh] p-6 ${darkMode ? "bg-black" : "bg-white"}`} style={{ background: darkMode ? "#111" : "#f7f7f7", position: "relative", overflow: "hidden" }}>
            <MouseTrailParticles darkMode={darkMode} />
            <div className={`rounded-2xl px-10 py-12 max-w-xl w-full text-center animate-fade-in ${darkMode ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800" : "bg-gradient-to-br from-white via-gray-100 to-white border border-gray-200"}`} style={{ position: "relative", zIndex: 1 }}>
                <h2 className={`text-5xl font-black mb-6 tracking-tight ${darkMode ? "text-white" : "text-gray-900"} animate-slide-up`}>SalHub</h2>
                <p className={`text-lg mb-4 font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Your central hub for <span className={`font-bold ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}>portfolio</span>, <span className={`font-bold ${darkMode ? "text-pink-400" : "text-pink-600"}`}>blog</span>, and <span className={`font-bold ${darkMode ? "text-purple-400" : "text-purple-600"}`}>projects</span>.</p>
                <div className="flex justify-center gap-4 mt-6">
                    <button onClick={() => navigate("/portfolio")} className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${darkMode ? "bg-white text-black hover:bg-indigo-400 hover:text-white" : "bg-black text-white hover:bg-indigo-600"}`}>View Portfolio</button>
                    <button onClick={() => navigate("/blog")} className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400 ${darkMode ? "bg-white text-black hover:bg-pink-400 hover:text-white" : "bg-black text-white hover:bg-pink-600"}`}>Read Blog</button>
                </div>
            </div>
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both;
                }
                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-slide-up {
                    animation: slide-up 1.2s cubic-bezier(.4,0,.2,1) both;
                }
            `}</style>
        </main>
    );
}