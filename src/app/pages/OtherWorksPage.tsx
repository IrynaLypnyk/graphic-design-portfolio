import { useNavigate } from "react-router";
import { motion } from "motion/react";

export function OtherWorksPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col bg-background text-foreground"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border">
        <button
          onClick={() => navigate("/portfolio")}
          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
          style={{ cursor: "pointer" }}
        >
          <span style={{ fontSize: "1.1rem" }}>←</span>
          <span
            className="tracking-[0.25em]"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem" }}
          >
            PORTFOLIO
          </span>
        </button>
        <span
          className="text-muted-foreground tracking-[0.3em]"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem" }}
        >
          OTHER WORKS
        </span>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col justify-between px-6 py-10 md:py-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="leading-none uppercase text-foreground"
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 11vw, 12rem)",
              lineHeight: 0.92,
            }}
          >
            <div>OTHER</div>
            <div style={{ color: "var(--burgundy)" }}>WORKS.</div>
          </div>
        </motion.div>

        {/* Works placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-0"
        >
          <div className="w-full h-px bg-border mb-12" />

          {/* Placeholder masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center"
                style={{
                  background: "#0f0f0f",
                  aspectRatio: i % 3 === 0 ? "1/1.4" : "1/1",
                }}
              >
                <span
                  className="text-muted-foreground"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.3em",
                  }}
                >
                  WORK {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-muted-foreground mt-2 opacity-30"
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.7rem",
                  }}
                >
                  COMING SOON
                </span>
              </div>
            ))}
          </div>

          <p
            className="mt-8 text-muted-foreground"
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
            }}
          >
            WORKS LOADING — SEND YOUR IMAGES TO POPULATE THIS SECTION.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
