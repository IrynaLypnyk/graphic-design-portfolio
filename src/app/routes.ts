import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { DuckClubPage } from "./pages/DuckClubPage";
import { OtherWorksPage } from "./pages/OtherWorksPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path: "/portfolio",
    Component: PortfolioPage,
  },
  {
    path: "/portfolio/duck-club",
    Component: DuckClubPage,
  },
  {
    path: "/portfolio/other",
    Component: OtherWorksPage,
  },
]);
