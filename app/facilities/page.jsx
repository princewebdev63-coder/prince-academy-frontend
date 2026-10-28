
import FacilityCard from "@/components/facilities/FacilityCard";
import { facilities } from "@/data/facilitiesData";
import FacilitiesBanner from "@/components/home/FacilitiesBanner";

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[1400px] px-4 pt-16 pb-6 sm:px-8 lg:px-12">
        <p className="mb-3 text-xs font-extrabold tracking-[2px] text-secondary">
          LIFE AT PRINCE
        </p>

        <h1 className="text-3xl font-extrabold text-primary sm:text-4xl lg:text-[42px]">
          Campus & Facilities
        </h1>

        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
          Explore our campus, classrooms and facilities.
        </p>

        <div className="mt-8 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <FacilityCard
              key={facility.title}
              facility={facility}
              className="w-full max-w-[360px] sm:w-full"
            />
          ))}
        </div>

        <div className="mt-10">
          <FacilitiesBanner />
        </div>
      </div>
    </main>
  );
}
