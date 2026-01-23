import { PropertyCard } from "@/components/cards/PropertyCard";

const properties = [
  {
    title: "Robin’s Lane",
    location: "Liloan, Cebu",
    price: "Price Upon Request",
    slug: "robins-lane",
    image: "/placeholder/property1.jpg",
    status: "Pre-Selling",
  },
  {
    title: "Sample Property",
    location: "Talisay, Cebu",
    price: "₱2.8M",
    slug: "sample-property",
    image: "/placeholder/property2.jpg",
    status: "RFO",
  },
];

export default function PropertiesPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold mb-8">Properties</h1>

      <div
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {properties.map((p) => (
          <PropertyCard key={p.slug} {...p} />
        ))}
      </div>
    </div>
  );
}
