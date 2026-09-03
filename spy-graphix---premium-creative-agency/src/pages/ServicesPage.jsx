import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search } from "lucide-react";
import { INITIAL_SERVICES } from "../data/initialData";

export function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Use ONE source of truth
  const services = INITIAL_SERVICES;

  const categories = useMemo(() => {
    return [
      "All",
      ...Array.from(
        new Set(services.map((service) => service.category))
      ),
    ];
  }, [services]);

  const filteredServices = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return services.filter((service) => {
      const matchesSearch =
        !query ||
        service.title?.toLowerCase().includes(query) ||
        service.shortDesc?.toLowerCase().includes(query) ||
        service.subServices?.some((sub) =>
          sub.toLowerCase().includes(query)
        );

      const matchesCategory =
        selectedCategory === "All" ||
        service.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [services, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-white px-5 md:px-10 lg:px-16 py-20">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#6d001a]" />

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
            Complete Service Architecture
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-syne text-[#111111] leading-[0.95]">
          Capabilities &
          <br />
          <span className="text-[#999999]">
            Creative Design Solutions.
          </span>
        </h1>

        <p className="max-w-2xl mt-6 text-sm md:text-base text-[#666666] leading-relaxed">
          From full luxury brand identities and 3D WebGL web applications
          to factory packaging dielines and generative AI asset production.
        </p>
      </div>

      {/* Search + Categories */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">

          {/* Search */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g. Logo, Dieline, 3D, Packaging)..."
              className="w-full bg-[#F6F6F6] text-xs text-[#111111] pl-10 pr-4 py-3 rounded-2xl outline-none focus:ring-2 focus:ring-[#6d001a]/30"
            />
          </div>

          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${selectedCategory === cat
                  ? "bg-[#111111] text-white shadow-md"
                  : "bg-[#F6F6F6] text-[#777777] hover:bg-[#EAEAEA] hover:text-[#111111]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="max-w-7xl mx-auto mb-6">
        <p className="text-xs text-[#999999] font-medium">
          Showing{" "}
          <span className="text-[#111111] font-bold">
            {filteredServices.length}
          </span>{" "}
          of{" "}
          <span className="text-[#111111] font-bold">
            {services.length}
          </span>{" "}
          services
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="group bg-white rounded-[28px] p-8 border border-black/8 shadow-soft hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6"
          >

            {/* Content */}
            <div className="space-y-4">

              {/* Category */}
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#6d001a] bg-[#6d001a]/10 px-3 py-1 rounded-full">
                  {service.category}
                </span>

                <span className="text-xs text-[#999999] font-medium">
                  {service.subServices?.length || 0} Deliverables
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold font-syne text-[#111111]">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-xs text-[#666666] leading-relaxed">
                {service.shortDesc}
              </p>

              {/* Subservices */}
              <div className="pt-3">
                <p className="text-[10px] text-[#999999] uppercase font-bold tracking-wider mb-3">
                  Included Sub-services
                </p>

                <div className="space-y-2">
                  {service.subServices?.slice(0, 5).map((sub, index) => (
                    <div
                      key={`${service.id}-${index}`}
                      className="flex items-center gap-2 text-xs text-[#555555]"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#6d001a]" />
                      {sub}
                    </div>
                  ))}
                </div>

                {service.subServices?.length > 5 && (
                  <p className="text-[10px] text-[#999999] mt-3">
                    +{service.subServices.length - 5} more
                  </p>
                )}
              </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-black/6 pt-4 flex items-center justify-between">

              <div className="space-y-0.5">
                <span className="text-[10px] text-[#999999] uppercase font-bold">
                  Investment
                </span>

                <p className="text-sm font-bold text-[#111111]">
                  {service.pricing?.[0]?.price || "Custom Scope"}
                </p>
              </div>

              {/* IMPORTANT: use service.slug directly */}
              <Link
                to={`/services/${service.slug}`}
                className="bg-[#111111] hover:bg-[#6d001a] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
                data-cursor="EXPLORE"
              >
                <span>Details</span>

                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* No results */}
      {filteredServices.length === 0 && (
        <div className="max-w-7xl mx-auto py-20 text-center">
          <h3 className="text-2xl font-bold text-[#111111]">
            No services found
          </h3>

          <p className="text-sm text-[#777777] mt-2">
            Try another search or category.
          </p>

          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="mt-5 px-5 py-2.5 bg-[#111111] text-white rounded-full text-xs font-bold"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}