import { useNavigate } from "react-router";
import { PageShell } from "@/app/components/layout/PageShell";
import { PageHeader } from "@/app/components/layout/PageHeader";
import { PortfolioTile } from "@/app/components/layout/PortfolioTile";

export function PortfolioPage() {
  const navigate = useNavigate();

  return (
    <PageShell>
      <PageHeader backTo="/" backLabel="BACK" title="PORTFOLIO" />

      <main className="flex-1 grid grid-cols-1 md:grid-cols-2">
        <PortfolioTile
          index="01"
          category="BRAND WORKS"
          title={
            <>
              DUCK
              <br />
              CLUB
            </>
          }
          onClick={() => navigate("/portfolio/duck-club")}
          hoverClass="border-b md:border-b-0 md:border-r border-border hover:bg-primary active:bg-primary"
          textHoverClass="group-hover:text-primary-foreground group-active:text-primary-foreground"
          arrowHoverClass="group-hover:text-primary-foreground group-active:text-primary-foreground"
          animationX={-30}
        />

        <PortfolioTile
          index="02"
          category="OTHER WORKS"
          title="OTHER"
          onClick={() => navigate("/portfolio/other")}
          hoverClass="hover:bg-foreground active:bg-foreground"
          textHoverClass="group-hover:text-background group-active:text-background"
          arrowHoverClass="group-hover:text-background group-active:text-background"
          animationX={30}
          delay={0.1}
        />
      </main>
    </PageShell>
  );
}
