import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div
      className={`min-h-dvh flex flex-col bg-background text-foreground ${className}`.trim()}
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      {children}
    </div>
  );
}
