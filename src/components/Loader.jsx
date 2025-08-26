import React from "react";

export default function Loader({ show }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 dark:bg-black/90">
      <div className="flex flex-col items-center">
        {/* GameCube-inspired rotating cube */}
        <div className="w-20 h-20 flex items-center justify-center animate-cube-spin">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="40" height="40" rx="10" fill="#fff" stroke="#222" strokeWidth="4" />
            <rect x="32" y="32" width="16" height="16" rx="4" fill="#222" />
            <rect x="38" y="38" width="4" height="4" rx="2" fill="#fff" />
          </svg>
        </div>
        <span className="mt-6 text-lg font-semibold text-white/80 dark:text-white/80 tracking-wide animate-fade-in">Loading...</span>
      </div>
      <style>{`
        @keyframes cube-spin {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
          100% { transform: rotateY(360deg); }
        }
        .animate-cube-spin {
          animation: cube-spin 1.6s cubic-bezier(.4,0,.2,1) infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </div>
  );
}
