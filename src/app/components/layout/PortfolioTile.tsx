import { motion } from "motion/react";
import { usePressFeedback } from "@/app/hooks/usePressFeedback";

type PortfolioTileProps = {
  index: string;
  category: string;
  title: React.ReactNode;
  onClick: () => void;
  hoverClass: string;
  textHoverClass: string;
  arrowHoverClass: string;
  animationX: number;
  delay?: number;
  className?: string;
};

export function PortfolioTile({
  index,
  category,
  title,
  onClick,
  hoverClass,
  textHoverClass,
  arrowHoverClass,
  animationX,
  delay = 0,
  className = "",
}: PortfolioTileProps) {
  const { pressed, pressProps } = usePressFeedback();

  return (
    <motion.button
      initial={{ opacity: 0, x: animationX }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      onClick={onClick}
      data-pressed={pressed ? "" : undefined}
      {...pressProps}
      className={`group relative flex flex-col items-start justify-end p-8 md:p-12 transition-colors duration-400 min-h-[45vh] md:min-h-0 ${hoverClass} ${className}`.trim()}
      style={{ cursor: "pointer", touchAction: "manipulation" }}
    >
      <div className="flex flex-col gap-3">
        <span
          className={`text-muted-foreground transition-colors duration-300 ${textHoverClass}`}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
          }}
        >
          {index} — {category}
        </span>
        <div
          className={`text-foreground transition-colors duration-300 leading-none uppercase ${textHoverClass}`}
          style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2.5rem, 7vw, 7rem)",
            lineHeight: 0.9,
          }}
        >
          {title}
        </div>
      </div>
      <span
        className={`absolute bottom-8 right-8 md:bottom-12 md:right-12 text-muted-foreground transition-colors duration-300 ${arrowHoverClass}`}
        style={{ fontSize: "1.5rem" }}
      >
        →
      </span>
    </motion.button>
  );
}
