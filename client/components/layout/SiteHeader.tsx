import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, ShieldCheck, X } from "lucide-react";
import { cn } from "@/lib/utils";
import SosButton from "./SosButton";

type NavItem = {
  label: string;
  to: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "Live Map", to: "/map" },
  { label: "Report", to: "/report" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl transition-shadow duration-300 supports-[backdrop-filter]:bg-white/65 dark:border-white/10 dark:bg-slate-900/75">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-left text-foreground">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-secondary text-xl font-bold text-white shadow-[0_16px_32px_rgba(234,57,67,0.45)]">
            <ShieldCheck className="h-7 w-7" aria-hidden="true" />
          </span>
          <span className="hidden sm:block">
            <span className="block font-display text-lg font-semibold leading-tight">SafeSignal</span>
            <span className="block text-sm text-foreground/70">SRM Student Safety Network</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-2 text-sm font-medium tracking-tight transition-colors duration-200",
                  isActive
                    ? "bg-foreground text-background shadow-[0_10px_24px_rgba(15,23,42,0.2)]"
                    : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/report"
            className="rounded-full border border-foreground/10 bg-white/60 px-4 py-2 text-sm font-semibold text-foreground/80 shadow-sm transition hover:border-foreground/20 hover:bg-white"
          >
            Quick Report
          </Link>
          <SosButton size="compact" />
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-transparent bg-white/60 p-2 text-foreground shadow-sm transition hover:bg-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden",
          open ? "max-h-screen opacity-100" : "pointer-events-none max-h-0 opacity-0",
          "overflow-hidden border-t border-white/50 bg-white/90 shadow-xl transition-all duration-300 ease-in-out dark:border-white/10 dark:bg-slate-900/90",
        )}
      >
        <nav className="space-y-1 px-4 py-4 sm:px-6">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "block rounded-2xl px-4 py-3 text-base font-semibold transition",
                  isActive
                    ? "safe-gradient text-white shadow-[0_14px_36px_rgba(234,57,67,0.35)]"
                    : "bg-white/70 text-foreground/80 shadow-sm ring-1 ring-foreground/5 hover:bg-white",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="mt-4 flex flex-col gap-3">
            <Link
              to="/report"
              className="rounded-2xl border border-foreground/10 bg-white/70 px-4 py-3 text-center text-base font-semibold text-foreground/80 shadow-sm transition hover:border-foreground/20 hover:bg-white"
            >
              Submit Anonymous Report
            </Link>
            <SosButton className="w-full" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
