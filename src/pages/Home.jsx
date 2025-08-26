import React from "react";
import MouseTrailParticles from "../components/MouseTrailParticles";
import { useNavigate } from "react-router-dom";

export default function Home({ darkMode }) {
    // Cleaned up: no featured projects, no ChameleonCursor, no stray return
    const mainRef = React.useRef(null);
    return (
        <main
            ref={mainRef}
            style={{
                background: darkMode ? '#0C0A14' : '#F8F8F8',
                minHeight: '200vh',
                position: 'relative',
                overflow: 'hidden',
                fontFamily: 'Inter, sans-serif',
                color: darkMode ? '#FAFAFA' : '#222',
            }}
        >
            {/* Dotted grid background */}
            <div
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: 'none',
                    backgroundImage: darkMode
                        ? 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)'
                        : 'radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                }}
            />
            <MouseTrailParticles darkMode={darkMode} />
            {/* Act I: Welcome */}
            <section
                style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingLeft: 'max(5vw, 48px)',
                    paddingRight: 'max(5vw, 48px)',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                <div style={{ width: '100%' }}>
                    <h1
                        className="font-black text-7xl md:text-8xl mb-8"
                        style={{
                            color: darkMode ? '#FAFAFA' : '#222',
                            letterSpacing: '-3px',
                            fontFamily: 'Inter, sans-serif',
                            animation: 'fadeInUp 1.2s cubic-bezier(.4,0,.2,1) both',
                        }}
                    >
                        SalValichu
                    </h1>
                    <h2
                        className="font-bold text-3xl md:text-4xl mb-12"
                        style={{
                            color: darkMode ? '#FAFAFA' : '#222',
                            fontFamily: 'Inter, sans-serif',
                            opacity: darkMode ? 0.8 : 0.85,
                        }}
                    >
                        Portfolio & Blog
                    </h2>
                    <div style={{ fontSize: '1.2rem', opacity: darkMode ? 0.7 : 0.8, color: darkMode ? '#FAFAFA' : '#222' }}>
                        <span>Scroll to explore ↓</span>
                    </div>
                </div>
            </section>
            {/* Act II: Hub */}
            <section
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    paddingLeft: 'max(5vw, 48px)',
                    paddingRight: 'max(5vw, 48px)',
                    maxWidth: '900px',
                    margin: '0 auto',
                    marginTop: '8vh',
                }}
            >
                <div style={{ width: '100%' }}>
                    <h2 className="font-black text-4xl mb-6" style={{ color: darkMode ? '#FAFAFA' : '#222', fontFamily: 'Inter, sans-serif' }}>Welcome to the Hub</h2>
                    <p className="text-lg mb-10" style={{ color: darkMode ? '#FAFAFA' : '#222', opacity: darkMode ? 0.85 : 0.9, fontFamily: 'Inter, sans-serif' }}>
                        I'm SalValichu, a developer and designer passionate about building beautiful, interactive experiences. Explore my portfolio and blog below.
                    </p>
                </div>
            </section>
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </main>
    );
}