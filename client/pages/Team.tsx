import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Adwait Mistri",
    role: "Founder & Lead Strategist",
    bio: "Architects cross-campus protocols that align security, accessibility, and mental-wellness support for every SRM student.",
    focus: "Emergency readiness champion",
    gradient: "from-primary via-rose-500 to-secondary",
    email: "adwait@safesignal.app",
    linkedin: "https://www.linkedin.com/in/adwait-mistri",
  },
  {
    name: "Vedant Sharma",
    role: "Head of Engineering",
    bio: "Builds resilient infrastructure, GPS telemetry, and fail-safe automations that keep SafeSignal always available.",
    focus: "Reliability & platform ops",
    gradient: "from-secondary via-primary to-accent",
    email: "vedant@safesignal.app",
    linkedin: "https://www.linkedin.com/in/vedant-sharma",
  },
  {
    name: "Harsh",
    role: "Experience & Research Lead",
    bio: "Translates student feedback into calm, actionable interfaces and ensures inclusive accessibility patterns campus-wide.",
    focus: "Human-centered design",
    gradient: "from-accent via-primary to-secondary",
    email: "harsh@safesignal.app",
    linkedin: "https://www.linkedin.com/in/harsh-srm",
  },
  {
    name: "SRM SafeSignal Team",
    role: "Student Safety Guild",
    bio: "A volunteer coalition of wardens, hostel reps, first-aid trainers, and counsellors who coordinate drills and night escorts.",
    focus: "Community guardianship",
    gradient: "from-primary via-rose-500 to-primary",
    email: "guild@safesignal.app",
    linkedin: "https://www.linkedin.com/company/safesignal",
  },
];

const Team = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-transparent to-secondary/20" aria-hidden="true" />
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <div className="max-w-3xl space-y-6 text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Meet the guardians
          </span>
          <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            The SRM students turning compassion into rapid safety action.
          </h1>
          <p className="text-lg text-foreground/70">
            SafeSignal is built by a multidisciplinary crew who run drills with campus security, operate real-time dashboards, and design product experiences that feel calm even in a crisis.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group flex h-full flex-col justify-between rounded-[2.5rem] border border-white/70 bg-white/85 p-6 shadow-[0_18px_44px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_64px_rgba(15,23,42,0.14)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient} text-lg font-bold text-white shadow-[0_14px_32px_rgba(15,23,42,0.16)]`}
                    aria-hidden="true"
                  >
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">{member.name}</h2>
                    <p className="text-sm font-medium text-foreground/60">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/70">{member.bio}</p>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-foreground/10 bg-foreground/5 p-4 text-sm text-foreground/70">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">Focus today</p>
                  <p className="mt-2 font-medium text-foreground">{member.focus}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-foreground/70">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 transition hover:border-foreground/30 hover:text-foreground"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Email
                  </a>
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 transition hover:border-foreground/30 hover:text-foreground"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 overflow-hidden rounded-[3rem] border border-primary/25 bg-gradient-to-r from-primary via-rose-500 to-secondary p-8 text-white shadow-[0_26px_80px_rgba(234,57,67,0.35)] sm:p-14">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em]">
              Community mission
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Safety is a campus-wide pact. Join the SafeSignal volunteer guild.
            </h2>
            <p className="max-w-3xl text-base text-white/85">
              Student volunteers host corridor check-ins, late-evening walk backs, and peer-support circles. Training is quick, compassionate, and co-led by counsellors.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/report"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-primary shadow-lg transition hover:bg-white/90"
            >
              Share a safety insight
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Host a dorm workshop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
