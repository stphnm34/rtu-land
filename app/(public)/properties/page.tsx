import { PropertyFilters } from "@/components/properties/PropertyFilters";
import { PropertyCard } from "@/components/cards/PropertyCard";
import { placeholderData } from "@/data/properties";

export default function PropertiesPage() {
  return (
    <div className="container mx-auto px-6 max-w-6xl py-12 space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Our Projects</h1>
        <p className="text-gray-600">
          Explore ongoing and upcoming developments across Cebu.
        </p>
      </div>

      {/* Filters */}
      <PropertyFilters />

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholderData.map((p, i) => (
          <PropertyCard
            key={i}
            title={p.title}
            location={p.location}
            price={p.price}
            status={p.status}
            slug={p.slug}
            image={p.images[0]}
          />
        ))}
      </div>
    </div>
  );
}
