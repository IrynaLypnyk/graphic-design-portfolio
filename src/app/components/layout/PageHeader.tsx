import { useNavigate } from "react-router";
import { usePressFeedback } from "@/app/hooks/usePressFeedback";

const monoLabelStyle = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.65rem",
} as const;

type PageHeaderProps = {
  backTo: string;
  backLabel: string;
  title: string;
  sticky?: boolean;
};

export function PageHeader({
  backTo,
  backLabel,
  title,
  sticky = false,
}: PageHeaderProps) {
  const navigate = useNavigate();
  const { pressed, runAction, pressProps } = usePressFeedback();

  return (
    <header
      className={`flex items-center justify-between px-6 py-4 border-b border-border ${
        sticky ? "sticky top-0 z-10 bg-background" : ""
      }`.trim()}
    >
      <button
        onClick={() => runAction(() => navigate(backTo))}
        {...pressProps}
        className={`flex items-center gap-3 transition-colors duration-200 hover:text-foreground ${pressed ? "text-foreground" : "text-muted-foreground"}`}
        style={{ cursor: "pointer", touchAction: "manipulation" }}
      >
        <span style={{ fontSize: "1.1rem" }}>←</span>
        <span className="tracking-[0.25em]" style={monoLabelStyle}>
          {backLabel}
        </span>
      </button>
      <span className="text-muted-foreground tracking-[0.3em]" style={monoLabelStyle}>
        {title}
      </span>
    </header>
  );
}
