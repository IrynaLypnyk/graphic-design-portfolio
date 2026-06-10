import { useNavigate } from "react-router";

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

  return (
    <header
      className={`flex items-center justify-between px-6 py-4 border-b border-border ${
        sticky ? "sticky top-0 z-10 bg-background" : ""
      }`.trim()}
    >
      <button
        onClick={() => navigate(backTo)}
        className="flex items-center gap-3 text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-200"
        style={{ cursor: "pointer" }}
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
