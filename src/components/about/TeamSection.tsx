"use client";

const team = [
  { name: "Nuwan Perera", role: "Co-Founder & CEO" },
  { name: "Sarah Fernando", role: "Product Manager" },
  { name: "Daniel Johnson", role: "Technical Lead" },
  { name: "Melissa Dissanayake", role: "Customer Success" },
  { name: "Tharindu Silva", role: "Lead Designer" },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Meet the People Behind FaithCore
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            A passionate team committed to serving and empowering churches worldwide.
          </p>
        </div>
        
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((member) => (
            <div
              key={member.name}
              className="group rounded-[32px] border border-gray-100 bg-white p-6 text-center shadow-md shadow-gray-100/30 transition-all hover:-translate-y-2 hover:shadow-xl hover:border-[#5B3DF5]/30 duration-300"
            >
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-gray-50 group-hover:border-[#ede9fe] transition-colors duration-300">
                <img
                  src="/images/avatar.jpg"
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-5 font-bold text-gray-900 leading-tight">
                {member.name}
              </h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
