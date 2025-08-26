import React from "react";
import projects from "../data/portfolio.json";

export default function Portfolio({ darkMode }) {
	return (
		<main className={`min-h-[60vh] p-6 flex flex-col items-center ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"}`}>
			<h2 className={`text-4xl font-bold mb-8 tracking-tight animate-fade-in ${darkMode ? "text-white" : "text-gray-900"}`}>Portfolio</h2>
			<p className={`mb-8 animate-fade-in ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Here are some of my projects and work samples.</p>
			<ul className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
				{projects.map(project => (
					<li
						key={project.id}
						className={`border-2 rounded-2xl shadow-xl p-8 flex flex-col gap-2 transition-transform duration-300 hover:scale-[1.02] animate-fade-in ${darkMode ? "border-white/20 bg-black/80 hover:border-indigo-400/60" : "border-gray-300 bg-white hover:border-indigo-400/40"}`}
						style={{animationDelay: `${project.id * 0.1}s`}}
					>
						<h3 className={`font-bold text-xl mb-1 transition-colors duration-200 ${darkMode ? "text-white hover:text-indigo-400" : "text-gray-900 hover:text-indigo-600"}`}>{project.title}</h3>
						<p className={`mb-2 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>{project.description}</p>
						<a href={project.link} target="_blank" rel="noopener noreferrer" className={`self-start px-4 py-2 rounded-lg font-semibold shadow transition-colors duration-200 ${darkMode ? "bg-white text-black hover:bg-indigo-400 hover:text-white" : "bg-black text-white hover:bg-indigo-400 hover:text-white"}`}>View Project</a>
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
