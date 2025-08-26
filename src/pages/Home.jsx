import React from "react";
import MouseTrailParticles from "../components/MouseTrailParticles";
import { useNavigate } from "react-router-dom";

export default function Home({ darkMode }) {
    const navigate = useNavigate();
    const [salhubVisible, setSalhubVisible] = React.useState(false);
    const mainRef = React.useRef(null);

    React.useEffect(() => {
        document.body.style.background = darkMode ? "#000" : "#fff";
        document.body.style.transition = "background 0.3s";
        return () => {
            document.body.style.background = "";
            document.body.style.transition = "";
        };
    }, [darkMode]);

    React.useEffect(() => {
        function handleScroll() {
            if (!mainRef.current) return;
            const scrollY = window.scrollY;
            setSalhubVisible(scrollY > window.innerHeight * 0.4);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main
            ref={mainRef}
            style={{
                background: darkMode ? "#000" : "#fff",
                minHeight: "200vh",
                position: "relative",
                overflow: "hidden",
                scrollSnapType: "y mandatory"
            }}
        >
            {/* Dotted grid background */}
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                    backgroundImage: `radial-gradient(${darkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"} 1px, transparent 1px)`,
                    backgroundSize: "24px 24px"
                }}
            />
            <MouseTrailParticles darkMode={darkMode} />
            {/* Welcome Section */}
            <section
                style={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    scrollSnapAlign: "start"
                }}
            >
                <h1
                    className={`text-center text-8xl font-black ${darkMode ? "text-white" : "text-black"}`}
                    style={{ letterSpacing: "-3px", opacity: salhubVisible ? 0.15 : 1, transition: "opacity 0.5s", zIndex: 1 }}
                >
                    Welcome.
                </h1>
            </section>
            {/* Divider */}
            <div style={{ width: "100%", height: "1px", background: darkMode ? "#222" : "#eee", opacity: 0.7, margin: "0 auto", maxWidth: "700px" }} />
            {/* SalHub Section */}
            <section
                style={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    scrollSnapAlign: "start"
                }}
            >
                <div
                    className={`rounded-xl px-12 py-14 max-w-2xl w-full text-center animate-fade-in shadow-lg ${darkMode ? "bg-black border border-white/10" : "bg-white border border-black/10"}`}
                    style={{ position: "relative", zIndex: 1, opacity: salhubVisible ? 1 : 0.15, transition: "opacity 0.5s", boxShadow: darkMode ? "0 4px 32px #111" : "0 4px 32px #ddd" }}
                >
                    <h2 className={`text-5xl font-black mb-7 tracking-tight ${darkMode ? "text-white" : "text-black"} animate-slide-up`}>
                        SalHub
                    </h2>
                    <p className={`text-lg mb-6 font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Your central hub for <span className={`font-bold ${darkMode ? "text-white" : "text-black"}`}>portfolio</span>, <span className={`font-bold ${darkMode ? "text-white" : "text-black"}`}>blog</span>, and <span className={`font-bold ${darkMode ? "text-white" : "text-black"}`}>projects</span>.
                    </p>
                    <div className="flex justify-center gap-6 mt-8">
                        <button
                            onClick={() => navigate("/portfolio")}
                            className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black ${darkMode ? "bg-white text-black hover:bg-black hover:text-white" : "bg-black text-white hover:bg-white hover:text-black"}`}
                        >
                            View Portfolio
                        </button>
                        <button
                            onClick={() => navigate("/blog")}
                            className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black ${darkMode ? "bg-white text-black hover:bg-black hover:text-white" : "bg-black text-white hover:bg-white hover:text-black"}`}
                        >
                            Read Blog
                        </button>
                    </div>
                </div>
            </section>
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