import { Outlet } from "react-router-dom";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

const AppShell = () => {
  return (
    <div className="flex min-h-screen flex-col bg-transparent">
      <a
        href="#main-content"
        className="absolute left-1/2 top-4 z-[60] -translate-x-1/2 transform rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background shadow-lg transition focus:translate-y-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="relative flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};

export default AppShell;
