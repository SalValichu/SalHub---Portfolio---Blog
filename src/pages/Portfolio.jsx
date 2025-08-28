import React, { useEffect, useState } from "react";
import projectsData from "../data/portfolio.json";
import shellIcon from "../assets/shell.svg";
import reactIcon from "../assets/react.svg";
const TAG_COLORS = {
	Script: "#6C47FF",
	Roblox: "#e73ce1ff",
	MacOS: "#a0e3fbff",
};
function useGithubStars(repoUrl) {
	const [stars, setStars] = useState(null);
	useEffect(() => {
		if (!repoUrl) return;
		const match = repoUrl.match(/github.com\/(.+?)\/(.+?)(?:$|\/)/);
		if (!match) return;
		const owner = match[1];
		const repo = match[2];
		fetch(`https://api.github.com/repos/${owner}/${repo}`)
			.then(res => res.json())
			.then(data => setStars(data.stargazers_count || 0));
	}, [repoUrl]);
	return stars;
}



export default function Portfolio({ darkMode }) {
  const projects = projectsData;
  return (
    <main className={`min-h-[60vh] p-6 flex flex-col items-center ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"}`}>
      <h2 className={`text-4xl font-bold mb-8 tracking-tight animate-fade-in ${darkMode ? "text-white" : "text-gray-900"}`}>Portfolio</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {projects.map(project => {
          const stars = useGithubStars(project.source);
          return (
            <li
              key={project.id}
              className={`relative overflow-hidden p-px rounded-xl shadow-xl animate-fade-in`}
              style={{
                animationDelay: `${project.id * 0.1}s`,
                minHeight: "340px",
                background: darkMode ? "#101018" : "#f8f8fa",
                boxShadow: darkMode ? "0 4px 32px rgba(0,0,0,0.25)" : "0 4px 32px rgba(0,0,0,0.10)"
              }}
            >
              {/* Animated glow border */}
              <div className="glow absolute inset-0 w-[120px] h-[120px] rotate-45" style={{zIndex:1}}></div>
              <section className="inline-block space-y-2 rounded-xl z-10 relative px-5 py-2 w-full h-full" style={{background: darkMode ? "#101018" : "#f8f8fa"}}>
                {/* Project tags top left */}
                <div style={{
                  position: "absolute",
                  top: 24,
                  left: 24,
                  display: "flex",
                  gap: "0.5rem",
                  zIndex: 2
                }}>
                  {project.tags && project.tags.map((tag, i) => (
                    <span key={i} className="portfolio-tag-glow" style={{
                      background: "#000",
                      color: "#fff",
                      borderRadius: "999px",
                      padding: "0.32rem 1.1rem",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      boxShadow: darkMode ? "0 2px 8px #0002" : "0 2px 8px #0001",
                      letterSpacing: "0.02em",
                      border: "2px solid transparent",
                      position: "relative"
                    }}>{tag}</span>
                  ))}
                </div>
                {/* Star count top right */}
                {project.source && (
                  <div style={{
                    position: "absolute",
                    top: 24,
                    right: 24,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    background: darkMode ? "#232136" : "#ece9f6",
                    borderRadius: "999px",
                    padding: "0.3rem 0.9rem",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: darkMode ? "#FFD700" : "#6C47FF",
                    boxShadow: darkMode ? "0 2px 8px #0002" : "0 2px 8px #0001"
                  }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:"0.2rem"}}><path d="M10 2.5l2.472 5.008 5.528.805-4 3.902.944 5.505L10 15.25l-4.944 2.47.944-5.505-4-3.902 5.528-.805L10 2.5z" fill="currentColor"/></svg>
                    {stars !== null ? stars : "-"}
                  </div>
                )}
                <div style={{
                  position: "relative",
                  width: "100%",
                  height: "180px",
                  borderRadius: "18px",
                  overflow: "hidden",
                  marginBottom: "1.5rem",
                  background: darkMode ? "#18162a" : "#ece9f6",
                  boxShadow: darkMode ? "0 4px 32px rgba(0,0,0,0.25)" : "0 4px 32px rgba(0,0,0,0.10)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  {project.image ? (
                    <img src={project.image} alt={project.title} style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: darkMode ? "brightness(0.8)" : "brightness(1)",
                    }} />
                  ) : (
                    <span style={{fontWeight:700, fontSize:"1.2rem", color:darkMode?"#6C47FF":"#4B2999"}}>IMG</span>
                  )}
                  {/* Overlay title */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(180deg,rgba(0,0,0,0.55) 0%,rgba(0,0,0,0.15) 100%)",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "1.2rem"
                  }}>
                    <span style={{fontWeight:900, fontSize:"1.5rem", color:"#fff", textShadow:"0 2px 12px #000"}}>{project.title}</span>
                  </div>
                </div>
                {/* Description */}
                <p className={`mb-2 ${darkMode ? "text-gray-200" : "text-gray-800"}`} style={{fontSize:"1.1rem", fontWeight:500}}>{project.description}</p>
                {/* Tech stack as custom icons bottom left */}
                <div style={{
                  position: "absolute",
                  left: 24,
                  bottom: 24,
                  display: "flex",
                  gap: "0.7rem"
                }}>
                  {project.tech && project.tech.map((tech, i) => {
                    let icon = null;
                    if (tech.toLowerCase() === "shell") icon = shellIcon;
                    if (tech.toLowerCase() === "react") icon = reactIcon;
                    return (
                      <span key={i} style={{
                        background: darkMode ? "#232136" : "#ece9f6",
                        color: darkMode ? "#fff" : "#222",
                        borderRadius: "999px",
                        padding: "0.35rem 1.1rem",
                        fontWeight: 700,
                        fontSize: "1rem",
                        boxShadow: darkMode ? "0 2px 8px #0002" : "0 2px 8px #0001",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem"
                      }}>
                        {icon && <img src={icon} alt={tech + " icon"} style={{width: "1.5rem", height: "1.5rem", marginRight: "0.3rem"}} />}
                        {tech}
                      </span>
                    );
                  })}
                </div>
                {/* Source code button bottom right */}
                {project.source && (
                  <a href={project.source} target="_blank" rel="noopener noreferrer" style={{
                    position: "absolute",
                    right: 24,
                    bottom: 24,
                    background: "#6C47FF",
                    borderRadius: "999px",
                    padding: "0.4rem 1.3rem",
                    fontWeight: 700,
                    color: "#fff",
                    fontSize: "1rem",
                    textDecoration: "none",
                    boxShadow: "0 2px 12px #6C47FF44"
                  }}>
                    Source Code
                  </a>
                )}
              </section>
            </li>
          );
        })}
      </ul>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(.4,0,.2,1) both;
        }
        .glow {
          animation: move 5s linear infinite;
          offset-path: rect(0% auto 100% auto);
          background: radial-gradient(#fff, #f1f5f9, transparent);
          opacity: 0.7;
        }
        @keyframes move {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        .portfolio-tag-glow {
          border: 2px solid transparent;
          background-clip: padding-box;
          position: relative;
        }
        .portfolio-tag-glow::before {
          content: "";
          position: absolute;
          top: -2px; left: -2px; right: -2px; bottom: -2px;
          border-radius: 999px;
          z-index: 0;
          background: linear-gradient(270deg, #fff, #f1f5f9, #fff);
          animation: border-glow 3s linear infinite;
        }
        @keyframes border-glow {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </main>
  );
}