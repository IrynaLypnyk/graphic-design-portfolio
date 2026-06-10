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
  pressedBgClass: string;
  pressedTextClass: string;
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
  pressedBgClass,
  pressedTextClass,
  animationX,
  delay = 0,
  className = "",
}: PortfolioTileProps) {
  const { pressed, runAction, pressProps } = usePressFeedback();

  return (
    <motion.button
      initial={{ opacity: 0, x: animationX }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      onClick={() => runAction(onClick)}
      {...pressProps}
      className={`group relative flex flex-col items-start justify-end p-8 md:p-12 transition-colors duration-200 min-h-[45vh] md:min-h-0 ${hoverClass} ${pressed ? pressedBgClass : ""} ${className}`.trim()}
      style={{ cursor: "pointer", touchAction: "manipulation" }}
    >
      <div className="flex flex-col gap-3">
        <span
          className={`transition-colors duration-200 ${textHoverClass} ${pressed ? pressedTextClass : "text-muted-foreground"}`}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
          }}
        >
          {index} — {category}
        </span>
        <div
          className={`transition-colors duration-200 leading-none uppercase ${textHoverClass} ${pressed ? pressedTextClass : "text-foreground"}`}
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
        className={`absolute bottom-8 right-8 md:bottom-12 md:right-12 transition-colors duration-200 ${arrowHoverClass} ${pressed ? pressedTextClass : "text-muted-foreground"}`}
        style={{ fontSize: "1.5rem" }}
      >
        →
      </span>
    </motion.button>
  );
}
