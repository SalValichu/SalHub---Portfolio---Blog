import React from "react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div
      className="project-card"
      style={{
        background: "rgba(20,18,32,0.98)",
        borderRadius: "22px",
        boxShadow: "0 2px 32px #1a1830cc",
        border: "2px solid #6C47FF",
        padding: "2.2rem 2rem 1.5rem 2rem",
        maxWidth: "420px",
        minHeight: "340px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "box-shadow 0.2s, border-color 0.2s",
        margin: "0 auto"
      }}
    >
      {/* Screenshot placeholder */}
      <div style={{
        width: "100%",
        height: "160px",
        borderRadius: "16px",
        background: "linear-gradient(90deg,#6C47FF33,#0C0A14 80%)",
        marginBottom: "1.2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <span style={{ color: "#6C47FF", fontWeight: 700, fontSize: "1.1rem", opacity: 0.7 }}>Screenshot</span>
      </div>
      <h3 style={{ fontFamily: "Inter,sans-serif", fontWeight: 900, fontSize: "1.5rem", color: "#FAFAFA", marginBottom: "0.7rem" }}>{project.title}</h3>
      <p style={{ color: "#FAFAFA", opacity: 0.85, fontSize: "1rem", marginBottom: "1.2rem" }}>{project.description}</p>
      {/* Tech stack icons */}
      <div style={{ display: "flex", gap: "0.7rem", marginBottom: "1.2rem" }}>
        {project.tech && project.tech.map((tech, i) => (
          <span key={i} style={{ background: "#18162a", color: "#FAFAFA", borderRadius: "8px", padding: "0.3rem 0.7rem", fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.01em" }}>{tech}</span>
        ))}
      </div>
      {/* Source code link */}
      {project.source && (
        <a href={project.source} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#6C47FF", fontWeight: 700, fontSize: "1rem", textDecoration: "none", marginTop: "0.5rem", transition: "color 0.18s" }} className="cursor-pill">
          <FaGithub style={{ fontSize: "1.2rem" }} /> Source Code
        </a>
      )}
    </div>
  );
}
