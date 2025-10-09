import { Link } from "react-router-dom";
import {
  AlertTriangle,
  MapPin,
  RadioReceiver,
  ShieldCheck,
  Smartphone,
  Waves,
  BellRing,
  HeartHandshake,
} from "lucide-react";
import SosButton from "@/components/layout/SosButton";

const featureHighlights = [
  {
    title: "Instant Campus Broadcasts",
    description: "One tap alerts guards, wardens, and nearby peers with a verified emergency badge.",
    icon: AlertTriangle,
  },
  {
    title: "Precision Location Tracking",
    description: "Live GPS sharing updates every five seconds until help confirms arrival.",
    icon: MapPin,
  },
  {
    title: "Offline-Ready Alerts",
    description: "Progressive web support keeps your last known location cached even if signal drops.",
    icon: Waves,
  },
];

const responseFlow = [
  {
    title: "Detect",
    description: "Trigger SOS or submit an anonymous concern with optional evidence attachments.",
    detail: "Device vibration confirms your request has been transmitted.",
  },
  {
    title: "Coordinate",
    description: "Security, faculty mentors, and student responders receive synchronized instructions.",
    detail: "Heat-map routing ensures the nearest responder is assigned instantly.",
  },
  {
    title: "Resolve",
    description: "Status updates, wellness follow-ups, and escalation logs keep you informed.",
    detail: "Your history stays encrypted so you remain in control of your data.",
  },
];

const trustSignals = [
  {
    label: "Avg. response time",
    value: "72 seconds",
  },
  {
    label: "Verified responders",
    value: "230+",
  },
  {
    label: "Student safety drills",
    value: "18 this semester",
  },
];

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/25 via-transparent to-secondary/30" aria-hidden="true" />
      <section className="relative isolate">
        <div className="absolute -top-40 right-1/3 -z-10 h-72 w-72 rounded-full bg-primary/40 blur-3xl sm:h-96 sm:w-96" aria-hidden="true" />
        <div className="absolute -bottom-28 left-1/4 -z-10 h-80 w-80 rounded-full bg-accent/30 blur-3xl sm:left-1/3 sm:h-[26rem] sm:w-[26rem]" aria-hidden="true" />

        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:flex-row lg:items-start lg:px-8 lg:pb-28 lg:pt-24">
          <div className="flex w-full max-w-2xl flex-col items-start gap-8 text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary shadow-sm">
              SRM SafeSignal
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                24/7 student safety, one tap ahead of every emergency.
              </h1>
              <p className="text-lg text-foreground/75 sm:text-xl">
                SafeSignal connects SRM students with rapid-response teams, crowd-sourced vigilance, and smart automations that keep your circle informed from the very first second.
              </p>
            </div>
            <div className="flex w-full flex-col gap-4 sm:flex-row">
              <SosButton className="w-full sm:w-auto" />
              <Link
                to="/features"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-foreground/10 bg-white/70 px-6 py-3 text-base font-semibold text-foreground/80 shadow-md transition hover:border-foreground/30 hover:bg-white sm:w-auto"
              >
                Explore live features
                <ShieldCheck className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid w-full gap-6 sm:grid-cols-3">
              {trustSignals.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/70 bg-white/80 p-5 text-left shadow-[0_18px_36px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70"
                >
                  <span className="text-sm font-semibold uppercase tracking-wide text-foreground/65">
                    {item.label}
                  </span>
                  <p className="mt-2 text-2xl font-bold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-xl">
            <div className="frosted-card pointer-events-none relative rounded-[2.5rem] p-8">
              <div className="absolute -top-14 right-10 flex h-24 w-24 items-center justify-center rounded-3xl border border-white/70 bg-white/90 shadow-xl">
                <RadioReceiver className="h-10 w-10 text-primary" aria-hidden="true" />
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase text-foreground/60">Live incident feed</p>
                    <p className="text-2xl font-bold text-foreground">Blue Gate, West Wing</p>
                  </div>
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">90m</span>
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-primary/15 via-white to-secondary/10 p-4">
                  <p className="text-sm font-semibold text-primary">Nearby responders</p>
                  <div className="mt-3 grid grid-cols-3 gap-4 text-sm font-medium text-foreground/70">
                    <div>
                      <p className="text-2xl font-bold text-foreground">05</p>
                      <p>Campus guards</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">12</p>
                      <p>Student allies</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">02</p>
                      <p>Medical units</p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm">
                    <p className="text-sm font-semibold text-foreground/60">Next drill</p>
                    <p className="mt-1 text-lg font-bold text-foreground">Cyber Cube, 4 PM</p>
                    <p className="mt-2 text-sm text-foreground/60">Opt-in to safety drills to stay response ready.</p>
                  </div>
                  <div className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm">
                    <p className="text-sm font-semibold text-foreground/60">Response quality</p>
                    <p className="mt-1 text-lg font-bold text-foreground">4.9 / 5</p>
                    <p className="mt-2 text-sm text-foreground/60">Student-rated assurance from last 20 alerts.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-foreground/5 p-4 text-sm text-foreground/70">
                  <Smartphone className="h-5 w-5 text-primary" aria-hidden="true" />
                  Install SafeSignal to your home screen for instant offline access.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/60 bg-white/80 py-20 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="max-w-lg space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Why SafeSignal
              </span>
              <h2 className="text-3xl font-bold sm:text-4xl">Built with SRM students, for SRM students.</h2>
              <p className="text-lg text-foreground/70">
                We collaborated with hostel leaders, faculty counselors, and campus security to prioritize tools that work under pressure. From smart routing to consent-first escalation, every feature is field-tested on campus.
              </p>
              <Link
                to="/team"
                className="inline-flex items-center gap-2 text-base font-semibold text-primary transition hover:text-primary/80"
              >
                Meet the team behind SafeSignal
                <HeartHandshake className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid flex-1 gap-6 sm:grid-cols-2">
              {featureHighlights.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(15,23,42,0.15)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70"
                >
                  <feature.icon
                    className="h-10 w-10 rounded-2xl bg-primary/10 p-2 text-primary transition group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
              Response Workflow
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl">Human-first safety automation when every second counts.</h2>
            <p className="text-lg text-foreground/70">
              Transparent hand-offs keep your guardians looped in from the first alert to the final check-in. Your data stays encrypted, and you decide who sees what.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {responseFlow.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_18px_44px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-wide text-primary/70">Step {index + 1}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/30">Secure</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm text-foreground/70">{step.description}</p>
                <p className="mt-4 text-sm font-medium text-foreground/60">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[3rem] border border-primary/25 bg-gradient-to-br from-primary via-rose-500 to-secondary p-8 sm:p-12 text-white shadow-[0_26px_80px_rgba(234,57,67,0.35)]">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em]">
                  Ready to respond
                </span>
                <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  Join 6,000+ SRM students keeping campus safe together.
                </h2>
                <p className="max-w-xl text-base text-white/80">
                  Add SafeSignal to your home screen to unlock offline mode, drill reminders, and personal guardian circles.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    to="/map"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-primary shadow-lg transition hover:bg-white/90"
                  >
                    View live campus map
                    <BellRing className="h-5 w-5" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                  >
                    Talk to SafeSignal mentors
                  </Link>
                </div>
              </div>
              <div className="rounded-[2.5rem] bg-white/10 p-6 backdrop-blur-lg">
                <h3 className="text-lg font-semibold uppercase tracking-[0.25em] text-white/70">Always on watch</h3>
                <ul className="mt-6 space-y-4 text-sm text-white/80">
                  <li className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                      <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                    </div>
                    Verified campus guardians monitor alerts in real time.
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                      <HeartHandshake className="h-5 w-5" aria-hidden="true" />
                    </div>
                    Student allies volunteer for walk-back support after late labs.
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                      <RadioReceiver className="h-5 w-5" aria-hidden="true" />
                    </div>
                    Multi-channel notifications reach SMS, email, and radio decks.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
