import { motion } from "motion/react";
import cover from "@/images/other/cover.png";
import poster from "@/images/other/poster.png";
import { PageShell } from "@/app/components/layout/PageShell";
import { PageHeader } from "@/app/components/layout/PageHeader";

const WORKS = [
  {
    src: poster,
    alt: "Undercover in Miami — movie poster",
  },
  {
    src: cover,
    alt: "Undercover in Miami — DVD cover wrap",
  },
] as const;

export function OtherWorksPage() {
  return (
    <PageShell>
      <PageHeader backTo="/portfolio" backLabel="PORTFOLIO" title="OTHER WORKS" />

      <main className="flex-1 flex flex-col justify-between px-6 py-10 md:py-16">
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-0"
        >
          <div className="w-full h-px bg-border mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {WORKS.map((work) => (
              <div
                key={work.alt}
                className="relative overflow-hidden bg-card flex items-center justify-center"
              >
                <img
                  src={work.src}
                  alt={work.alt}
                  className="block w-full max-h-[90vh] object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </PageShell>
  );
}
