import { useNavigate } from "react-router";
import { motion } from "motion/react";

export function PortfolioPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col bg-background text-foreground"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
          style={{ cursor: "pointer" }}
        >
          <span style={{ fontSize: "1.1rem" }}>←</span>
          <span
            className="tracking-[0.25em]"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem" }}
          >
            BACK
          </span>
        </button>
        <span
          className="text-muted-foreground tracking-[0.3em]"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem" }}
        >
          PORTFOLIO
        </span>
      </header>

      {/* Main — two massive split buttons */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2">
        {/* Duck Club */}
        <motion.button
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => navigate("/portfolio/duck-club")}
          className="group relative flex flex-col items-start justify-end p-8 md:p-12 border-b md:border-b-0 md:border-r border-border hover:bg-primary transition-colors duration-400 min-h-[45vh] md:min-h-0"
          style={{ cursor: "pointer" }}
        >
          <div className="flex flex-col gap-3">
            <span
              className="text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
              }}
            >
              01 — BRAND WORKS
            </span>
            <div
              className="text-foreground group-hover:text-primary-foreground transition-colors duration-300 leading-none uppercase"
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 7vw, 7rem)",
                lineHeight: 0.9,
              }}
            >
              DUCK
              <br />
              CLUB
            </div>
          </div>
          <span
            className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300"
            style={{ fontSize: "1.5rem" }}
          >
            →
          </span>
        </motion.button>

        {/* Other */}
        <motion.button
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          onClick={() => navigate("/portfolio/other")}
          className="group relative flex flex-col items-start justify-end p-8 md:p-12 hover:bg-foreground transition-colors duration-400 min-h-[45vh] md:min-h-0"
          style={{ cursor: "pointer" }}
        >
          <div className="flex flex-col gap-3">
            <span
              className="text-muted-foreground group-hover:text-background transition-colors duration-300"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
              }}
            >
              02 — OTHER WORKS
            </span>
            <div
              className="text-foreground group-hover:text-background transition-colors duration-300 leading-none uppercase"
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 7vw, 7rem)",
                lineHeight: 0.9,
              }}
            >
              OTHER
            </div>
          </div>
          <span
            className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-muted-foreground group-hover:text-background transition-colors duration-300"
            style={{ fontSize: "1.5rem" }}
          >
            →
          </span>
        </motion.button>
      </main>
    </div>
  );
}
