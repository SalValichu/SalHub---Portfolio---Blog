import React from "react";

export default function Contact({ darkMode }) {
	return (
		<main className={`min-h-[60vh] flex flex-col items-center justify-center p-6 ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"}`}>
			<div className={`rounded-2xl shadow-2xl p-10 max-w-lg w-full animate-fade-in border-2 ${darkMode ? "bg-black/80 border-white/20" : "bg-white border-gray-300"}`}>
				<h1 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Contact</h1>
				<p className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Get in touch with me via email or social media!</p>
				<form className="flex flex-col gap-4">
					<input type="text" placeholder="Your Name" className={`px-4 py-2 rounded-lg border transition-all duration-200 ${darkMode ? "bg-black/60 text-white border-white/20 focus:border-indigo-400 focus:bg-black/80" : "bg-white text-gray-900 border-gray-300 focus:border-indigo-400 focus:bg-gray-100"}`} />
					<input type="email" placeholder="Your Email" className={`px-4 py-2 rounded-lg border transition-all duration-200 ${darkMode ? "bg-black/60 text-white border-white/20 focus:border-indigo-400 focus:bg-black/80" : "bg-white text-gray-900 border-gray-300 focus:border-indigo-400 focus:bg-gray-100"}`} />
					<textarea placeholder="Your Message" rows={4} className={`px-4 py-2 rounded-lg border transition-all duration-200 ${darkMode ? "bg-black/60 text-white border-white/20 focus:border-indigo-400 focus:bg-black/80" : "bg-white text-gray-900 border-gray-300 focus:border-indigo-400 focus:bg-gray-100"}`} />
					<button type="submit" className={`mt-2 px-6 py-2 rounded-lg font-bold shadow transition-colors duration-200 ${darkMode ? "bg-white text-black hover:bg-indigo-400 hover:text-white" : "bg-black text-white hover:bg-indigo-400 hover:text-white"}`}>Send Message</button>
				</form>
			</div>
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
