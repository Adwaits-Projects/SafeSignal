import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="border-t border-white/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="space-y-2 text-sm text-foreground/70 md:max-w-xl">
          <p className="font-semibold text-foreground">Always-On Campus Watch</p>
          <p>
            SafeSignal empowers SRM students to request instant help, share precise locations, and report concerns anonymously.
          </p>
          <p className="text-foreground/60">© 2025 SafeSignal | Made with ❤ by SRM Students.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-foreground/70">
          <Link to="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-foreground">
            Terms
          </Link>
          <a
            href="mailto:support@safesignal.app"
            className="rounded-full border border-foreground/10 px-4 py-2 text-foreground/80 transition hover:border-foreground/30 hover:text-foreground"
          >
            support@safesignal.app
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
