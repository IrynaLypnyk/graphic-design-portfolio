import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { PageShell } from "@/app/components/layout/PageShell";

const FACTS = [
  { label: "AGE", value: "17" },
  { label: "FOCUS", value: "STREETWEAR" },
  { label: "SPECIALTY", value: "BRAND IDENTITY" },
  { label: "CRAFT", value: "LOGO CREATION" },
  { label: "EXPERIENCE", value: "1 YEAR" },
  { label: "OWN BRAND", value: "DUCK CLUB" },
];

export function HomePage() {
  const navigate = useNavigate();

  return (
    <PageShell className="overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border">
        <span
          className="tracking-[0.3em] text-foreground"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem" }}
        >
          TYKHON LYPNYK
        </span>
        <span
          className="text-muted-foreground tracking-[0.3em]"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem" }}
        >
          2024–25
        </span>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col justify-between px-6 py-10 md:py-16">
        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Name */}
          <div
            className="text-foreground uppercase mb-6 tracking-widest"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(1rem, 3vw, 2rem)",
              letterSpacing: "0.35em",
            }}
          >
            TYKHON LYPNYK
          </div>

          {/* Title lines */}
          <div
            className="leading-none tracking-tight uppercase"
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 11.5vw, 13rem)",
              lineHeight: 0.92,
            }}
          >
            <div className="text-foreground">GRAPHIC DESIGNER &amp;</div>
            <div style={{ color: "var(--burgundy)" }}>ILLUSTRATOR.</div>
          </div>
        </motion.div>

        {/* Info grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 md:mt-0"
        >
          {/* Divider */}
          <div className="w-full h-px bg-border mb-8" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4">
            {FACTS.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1">
                <span
                  className="text-muted-foreground tracking-[0.25em]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.55rem",
                  }}
                >
                  {fact.label}
                </span>
                <span
                  className="text-foreground tracking-wider"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    letterSpacing: "0.1em",
                  }}
                >
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* CTA Buttons */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="border-t border-border grid grid-cols-2"
      >
        <button
          onClick={() => navigate("/contact")}
          className="group relative flex items-center justify-center py-8 md:py-10 border-r border-border transition-colors duration-300 hover:bg-foreground"
          style={{ cursor: "pointer" }}
        >
          <span
            className="tracking-[0.25em] text-foreground group-hover:text-background transition-colors duration-300"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(0.9rem, 2.5vw, 1.4rem)",
              letterSpacing: "0.3em",
            }}
          >
            CONTACT
          </span>
        </button>

        <button
          onClick={() => navigate("/portfolio")}
          className="group relative flex items-center justify-center gap-3 py-8 md:py-10 transition-colors duration-300 hover:bg-primary"
          style={{ cursor: "pointer" }}
        >
          <span
            className="tracking-[0.25em] text-foreground group-hover:text-primary-foreground transition-colors duration-300"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(0.9rem, 2.5vw, 1.4rem)",
              letterSpacing: "0.3em",
            }}
          >
            PORTFOLIO
          </span>
          <span
            className="text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300"
            style={{ fontSize: "1.2rem" }}
          >
            →
          </span>
        </button>
      </motion.footer>
    </PageShell>
  );
}
