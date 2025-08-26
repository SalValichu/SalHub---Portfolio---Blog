import React from "react";
import projects from "../data/portfolio.json";

export default function Portfolio({ darkMode }) {
	return (
			<main className={`min-h-[60vh] p-6 flex flex-col items-center ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"}`}>
				<h2 className={`text-4xl font-bold mb-8 tracking-tight animate-fade-in ${darkMode ? "text-white" : "text-gray-900"}`}>Portfolio</h2>
				<ul className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
					{projects.map(project => (
						<li
							key={project.id}
							className={`border-2 rounded-2xl shadow-xl p-8 flex flex-col gap-2 animate-fade-in ${darkMode ? "border-white/20 bg-black/80" : "border-gray-300 bg-white"}`}
							style={{animationDelay: `${project.id * 0.1}s`, minHeight: "340px", position: "relative"}}
						>
							{/* Screenshot/image placeholder */}
							<div style={{
								position: "absolute",
								top: 24,
								left: 24,
								width: 64,
								height: 64,
								borderRadius: "12px",
								background: darkMode ? "#18162a" : "#ece9f6",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								fontWeight: 700,
								color: darkMode ? "#6C47FF" : "#4B2999",
								fontSize: "1.1rem",
								opacity: 0.7
							}}>
								IMG
							</div>
							<h3 className={`font-bold text-xl mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>{project.title}</h3>
							<p className={`mb-2 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>{project.description}</p>
							{/* Tech stack rectangle bottom left */}
							<div style={{
								position: "absolute",
								left: 24,
								bottom: 24,
								background: darkMode ? "#18162a" : "#ece9f6",
								borderRadius: "8px",
								padding: "0.4rem 1rem",
								fontSize: "0.95rem",
								fontWeight: 600,
								color: darkMode ? "#FAFAFA" : "#222",
								display: "flex",
								gap: "0.7rem"
							}}>
								{project.tech && project.tech.map((tech, i) => (
									<span key={i}>{tech}</span>
								))}
							</div>
							{/* Source code link rectangle bottom right */}
							{project.source && (
								<a href={project.source} target="_blank" rel="noopener noreferrer" style={{
									position: "absolute",
									right: 24,
									bottom: 24,
									background: darkMode ? "#18162a" : "#ece9f6",
									borderRadius: "8px",
									padding: "0.4rem 1rem",
									fontWeight: 700,
									color: "#6C47FF",
									fontSize: "1rem",
									textDecoration: "none"
								}}>
									Source Code
								</a>
							)}
						</li>
					))}
				</ul>
				<style>{`
					@keyframes fade-in {
						from { opacity: 0; transform: translateY(30px); }
						to { opacity: 1; transform: translateY(0); }
					}
					.animate-fade-in {
						animation: fade-in 1s cubic-bezier(.4,0,.2,1) both;
					}
				`}</style>
			</main>
	);
}
