import { Link } from "react-router-dom";
import {
  AlertCircle,
  AlertTriangle,
  BellRing,
  FileText,
  Footprints,
  MapPinned,
  Radar,
  ShieldCheck,
  Siren,
  Wifi,
} from "lucide-react";

const coreCapabilities = [
  {
    title: "Emergency Mission Control",
    description: "Coordinated dashboards notify campus guards, wardens, and your trusted circle simultaneously.",
    icon: AlertTriangle,
    points: [
      "Link SOS alerts to preset guardian or faculty circles.",
      "Escalate to campus command center with one swipe.",
      "Live status timeline with read receipts from responders.",
    ],
  },
  {
    title: "Proactive Prevention",
    description: "Smart schedules and ambient monitoring highlight patterns before they escalate into incidents.",
    icon: Radar,
    points: [
      "Heat-map patrol routes based on historic data and crowd density.",
      "Daily wellness check-ins for long lab hours or exams.",
      "Dorm corridor watchlists for repeated nuisance tags.",
    ],
  },
  {
    title: "Community Empowerment",
    description: "Student allies, counsellors, and medical teams collaborate transparently without exposing identities.",
    icon: ShieldCheck,
    points: [
      "Peer guardians volunteer for late-evening walk backs.",
      "Anonymous disagreements routed to neutral mediators.",
      "Mental health triage integrates with SRM counselling.",
    ],
  },
];

const automationStages = [
  {
    stage: "Signal",
    summary: "Tap SOS, long-press the widget, or trigger via wearable gesture.",
    detail: "The app vibrates twice and plays a subtle tone confirming transmission.",
    icon: Siren,
  },
  {
    stage: "Locate",
    summary: "GNSS, Wi-Fi, and cell triangulation combine for precise coordinates.",
    detail: "Fallback caching keeps your last known point available offline.",
    icon: MapPinned,
  },
  {
    stage: "Coordinate",
    summary: "Smart assignment ensures the closest qualified responder accepts the case.",
    detail: "Escalation policies can auto-notify faculty advisors or hostel wardens.",
    icon: BellRing,
  },
  {
    stage: "Recover",
    summary: "Post-incident journaling, counselling nudges, and report exports.",
    detail: "Download traceable summaries for university compliance teams.",
    icon: FileText,
  },
];

const preventionHighlights = [
  {
    label: "Offline-ready PWA",
    description: "Install SafeSignal and keep the critical SOS interface cached even when networks dip.",
    icon: Wifi,
  },
  {
    label: "Guard on the Go",
    description: "Wearable triggers and smartwatch tiles broadcast location without unlocking your phone.",
    icon: Footprints,
  },
  {
    label: "Pulse Checks",
    description: "Regular nudges ask how you feel after late labs and quietly log trends for counsellors.",
    icon: AlertCircle,
  },
];

const Features = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-transparent to-secondary/25" aria-hidden="true" />

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Deep dive
            </span>
            <h1 className="text-4xl font-bold sm:text-5xl">Safety features engineered for split-second certainty.</h1>
            <p className="text-lg text-foreground/70">
              Beyond emergency alerts, SafeSignal orchestrates campus-wide prevention, intelligent routing, and post-event care. Every workflow was co-designed with SRM students, hostel wardens, counsellors, and the security command center.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/map"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-primary/90"
              >
                View live SafeSignal coverage
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                to="/report"
                className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-white/70 px-6 py-3 text-base font-semibold text-foreground/80 transition hover:border-foreground/30 hover:bg-white"
              >
                Share an anonymous insight
              </Link>
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-white/70 bg-white/80 p-8 shadow-[0_18px_44px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70">
            <h2 className="text-lg font-semibold text-foreground">Focus areas this semester</h2>
            <ul className="mt-6 space-y-5 text-sm text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BellRing className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>Integrated stairwell beacons to triangulate indoor positioning for multi-floor hostels.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Radar className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>Predictive patrol recommendations using anonymized footfall insights.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>One-click incident exports that satisfy university safety compliance in under a minute.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {coreCapabilities.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[2.5rem] border border-white/70 bg-white/85 p-7 shadow-[0_18px_44px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_26px_64px_rgba(15,23,42,0.14)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70"
            >
              <feature.icon className="h-10 w-10 rounded-2xl bg-primary/10 p-2 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-semibold text-foreground">{feature.title}</h2>
              <p className="mt-3 text-sm text-foreground/70">{feature.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/65">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary/60" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/60 bg-white/85 py-20 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
                Automated care loop
              </span>
              <h2 className="text-3xl font-bold sm:text-4xl">A lifecycle that respects consent, clarity, and recovery.</h2>
              <p className="text-lg text-foreground/70">
                Each stage of the SafeSignal workflow protects identities while ensuring the right people are informed at exactly the right time.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/70 px-6 py-3 text-base font-semibold text-foreground/80 transition hover:border-foreground/30 hover:bg-white"
              >
                Schedule a safety consultation
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {automationStages.map((stage) => (
                <div
                  key={stage.stage}
                  className="rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-[0_18px_44px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70"
                >
                  <stage.icon className="h-8 w-8 rounded-xl bg-primary/10 p-1.5 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{stage.stage}</h3>
                  <p className="mt-3 text-sm text-foreground/70">{stage.summary}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/40">{stage.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="grid gap-6 md:grid-cols-2">
            {preventionHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[2rem] border border-white/60 bg-white/85 p-6 shadow-[0_18px_44px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70"
              >
                <item.icon className="h-8 w-8 rounded-xl bg-primary/10 p-1.5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.label}</h3>
                <p className="mt-2 text-sm text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[2.5rem] border border-primary/20 bg-gradient-to-br from-primary via-rose-500 to-secondary p-8 text-white shadow-[0_24px_70px_rgba(234,57,67,0.35)]">
            <h2 className="text-3xl font-bold">Every alert respects dignity and privacy.</h2>
            <p className="mt-4 text-base text-white/85">
              SafeSignal never publishes names or contact numbers without consent. Anonymous reports are hashed and stored securely so that only campus compliance officers can decrypt when absolutely required.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-white" aria-hidden="true" />
                ISO-compliant audit logs for every interaction.
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-white" aria-hidden="true" />
                Opt-in guardian circles with granular control.
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-white" aria-hidden="true" />
                Secure handovers to counselling and legal support.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
