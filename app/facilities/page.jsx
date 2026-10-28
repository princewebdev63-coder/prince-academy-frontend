
import FacilityCard from "@/components/facilities/FacilityCard";
import { facilities } from "@/data/facilitiesData";

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] px-4 py-16 text-[#172B40] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <p className="mb-3 text-xs font-extrabold tracking-[2px] text-[#8A621D]">
          LIFE AT PRINCE
        </p>

        <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-[42px]">
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
      </div>
    </main>
  );
}
