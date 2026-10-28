
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";

const missionPoints = [
  {
    title: "Academic Excellence",
    description: "Build strong concepts and a lifelong love of learning.",
    icon: BookOpen,
  },
  {
    title: "Future-Ready Education",
    description: "Encourage innovation, curiosity and critical thinking.",
    icon: BrainCircuit,
  },
  {
    title: "Character & Leadership",
    description: "Develop discipline, integrity and leadership qualities.",
    icon: ShieldCheck,
  },
];

export default function VisionPrinceAcademy() {
  return (
    <section
      aria-labelledby="prince-vision-heading"
      className="relative overflow-hidden bg-[#508AA8] px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Compact heading */}
        <div className="mb-6 text-center sm:mb-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/85">
            Our Vision & Mission
          </span>

          <h2
            id="prince-vision-heading"
            className="mt-2 text-2xl font-bold leading-tight sm:text-3xl"
          >
            School of the Future.
            <span className="text-[#F5E4B8]"> Leaders of Tomorrow.</span>
          </h2>
        </div>

        {/* Compact vision and mission layout */}
        <div className="grid overflow-hidden rounded-2xl bg-[#F5F8FC] shadow-[0_16px_45px_rgba(8,25,39,0.16)] md:grid-cols-[0.85fr_1.15fr]">
          {/* Vision */}
          <div className="relative flex flex-col justify-center overflow-hidden bg-[#102536] p-5 sm:p-7 lg:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-[#8FBBD4]/15"
            />

            <span className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-[#F5C66B]">
              Our Vision
            </span>

            <h3 className="relative mt-3 text-xl font-bold leading-snug sm:text-2xl">
              Making your child
              <span className="block text-[#8FBBD4]">
                tomorrow&apos;s leader.
              </span>
            </h3>

            <p className="relative mt-3 max-w-md text-sm leading-6 text-[#D0DCE5]">
              Empowering every child with knowledge, confidence
              and values to shape a better future.
            </p>

            <div className="relative mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
              <span>Learn</span>
              <span className="text-[#F5C66B]">•</span>
              <span>Lead</span>
              <span className="text-[#F5C66B]">•</span>
              <span>Inspire</span>
            </div>
          </div>

          {/* Mission */}
          <div className="p-5 sm:p-7 lg:p-8">
            <div className="mb-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#508AA8]">
                Our Mission
              </span>

              <h3 className="mt-1 text-xl font-bold text-[#122B3B]">
                Growing beyond classrooms.
              </h3>
            </div>

            <div className="divide-y divide-[#DCE5EB]">
              {missionPoints.map((point, index) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.title}
                    className="flex items-center gap-3 py-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#508AA8]/10 text-[#508AA8]">
                      <Icon size={19} aria-hidden="true" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-bold text-[#122B3B]">
                        {point.title}
                      </h4>

                      <p className="mt-0.5 text-xs leading-5 text-[#597080] sm:text-sm">
                        {point.description}
                      </p>
                    </div>

                   
                  </div>
                );
              })}
            </div>

            <Link
              href="/about-institute"
              className="mt-3 inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#508AA8] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3D718D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#508AA8] focus-visible:ring-offset-2"
            >
              Discover Our Academy
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
