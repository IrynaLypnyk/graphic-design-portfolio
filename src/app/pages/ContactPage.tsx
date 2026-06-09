import { useNavigate } from "react-router";
import { motion } from "motion/react";

const LINKS = [
  { label: "TELEGRAM", handle: "@yourhandle", href: "https://t.me/yourhandle" },
  { label: "INSTAGRAM", handle: "@yourhandle", href: "https://instagram.com/yourhandle" },
  { label: "BEHANCE", handle: "yourhandle", href: "https://behance.net/yourhandle" },
];

export function ContactPage() {
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
          CONTACT
        </span>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col justify-between px-6 py-10 md:py-16">
        {/* Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
            <div>LET'S</div>
            <div style={{ color: "var(--burgundy)" }}>BUILD</div>
            <div>SOMETHING.</div>
          </div>

          <p
            className="mt-8 text-muted-foreground max-w-sm"
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              fontSize: "0.9rem",
              lineHeight: 1.6,
              letterSpacing: "0.05em",
            }}
          >
            Open for collaborations, brand identity projects, and streetwear drops. Reach out — let's create something that stands out.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-0"
        >
          <div className="w-full h-px bg-border mb-0" />
          {LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-6 border-b border-border hover:pl-4 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <span
                  className="text-muted-foreground"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-foreground tracking-widest"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(1rem, 3vw, 1.5rem)",
                    letterSpacing: "0.2em",
                  }}
                >
                  {link.label}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className="text-muted-foreground group-hover:text-foreground transition-colors duration-200"
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  {link.handle}
                </span>
                <span
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-200"
                  style={{ fontSize: "1rem" }}
                >
                  →
                </span>
              </div>
            </a>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
