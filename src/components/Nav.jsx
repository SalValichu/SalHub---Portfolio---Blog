import { Link } from "react-router-dom";

export default function Nav({ darkMode }) {
	return (
		<nav className={`bg-transparent p-4 flex gap-6 justify-center backdrop-blur-md rounded-xl shadow-md mt-2 ${darkMode ? "text-white/90" : "text-gray-900"}`}>
			<Link to="/" className={`transition-colors ${darkMode ? "hover:text-indigo-400" : "hover:text-indigo-600"}`}>Home</Link>
			<Link to="/portfolio" className={`transition-colors ${darkMode ? "hover:text-indigo-400" : "hover:text-indigo-600"}`}>Portfolio</Link>
			<Link to="/blog" className={`transition-colors ${darkMode ? "hover:text-indigo-400" : "hover:text-indigo-600"}`}>Blog</Link>
			<Link to="/contact" className={`transition-colors ${darkMode ? "hover:text-indigo-400" : "hover:text-indigo-600"}`}>Contact</Link>
		</nav>
	);
}
