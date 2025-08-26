import React, { useState } from "react";
import posts from "../data/blog-posts.json";

export default function Blog({ darkMode }) {
  const [search, setSearch] = useState("");
  const filteredPosts = posts.filter(post => {
    const keyword = search.toLowerCase();
    return (
      post.title.toLowerCase().includes(keyword) ||
      post.content.toLowerCase().includes(keyword)
    );
  });

  return (
    <main className={`min-h-[60vh] p-6 flex flex-col items-center ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"}`}>
      <h2 className={`text-4xl font-bold mb-8 tracking-tight animate-fade-in ${darkMode ? "text-white" : "text-gray-900"}`}>Blog</h2>
      <div className="w-full max-w-3xl mb-6">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search blog posts..."
          className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all duration-200 text-lg ${darkMode ? "bg-black border-white/30 text-white focus:ring-indigo-400" : "bg-white border-gray-300 text-gray-900 focus:ring-indigo-400"}`}
          style={{boxShadow: darkMode ? "0 2px 16px #222" : "0 2px 16px #eee"}}
        />
      </div>
      <div className="w-full max-w-3xl flex flex-col gap-8">
        {filteredPosts.length === 0 ? (
          <div className={`text-center text-xl py-12 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>No posts found.</div>
        ) : (
          filteredPosts.map(post => (
            <article
              key={post.id}
              className={`border-2 rounded-2xl shadow-xl p-8 transition-transform duration-300 hover:scale-[1.02] animate-fade-in ${darkMode ? "border-white/20 bg-black/80 hover:border-indigo-400/60" : "border-gray-300 bg-white hover:border-indigo-400/40"}`}
              style={{animationDelay: `${post.id * 0.1}s`}}
            >
              <h3 className={`text-2xl font-semibold mb-2 transition-colors duration-200 ${darkMode ? "text-white hover:text-indigo-400" : "text-gray-900 hover:text-indigo-600"}`}>{post.title}</h3>
              <p className={`text-sm mb-4 italic ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{post.date}</p>
              <p className={`text-lg leading-relaxed ${darkMode ? "text-gray-200" : "text-gray-800"}`}>{post.content}</p>
            </article>
          ))
        )}
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
