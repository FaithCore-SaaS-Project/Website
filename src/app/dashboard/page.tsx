import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "FaithCore admin dashboard.",
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#5B3DF5] text-white text-3xl font-black">
          FC
        </div>
        <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
          Dashboard Coming Soon
        </h1>
        <p className="mt-3 text-gray-500">
          The admin dashboard is under active development.
        </p>
      </div>
    </div>
  );
}
