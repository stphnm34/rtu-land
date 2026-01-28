import Link from "next/link";

export function FeaturedProjects() {
  return (
    <section className="container mx-auto px-6 max-w-6xl space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="text-sm uppercase tracking-wide text-primary/80">
          Our Projects
        </div>
        <h2 className="text-3xl font-semibold">Featured Properties</h2>
        <p className="text-gray-600 max-w-lg">
          Discover thoughtfully crafted communities built for modern families and investors in Cebu.
        </p>
      </div>

      {/* Temporary Placeholder Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="border rounded-lg overflow-hidden">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <img
              src="/placeholder/property1.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-3 space-y-1">
            <p className="text-sm text-gray-500">Liloan, Cebu</p>
            <h3 className="font-medium text-lg">Robin's Lane</h3>
            <Link
              href="/properties/robins-lane"
              className="text-primary text-sm font-medium"
            >
              View Details →
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg overflow-hidden">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <img
              src="/placeholder/property2.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-3 space-y-1">
            <p className="text-sm text-gray-500">Talisay, Cebu</p>
            <h3 className="font-medium text-lg">Sample Property</h3>
            <Link
              href="/properties/sample-property"
              className="text-primary text-sm font-medium"
            >
              View Details →
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div>
        <Link href="/properties" className="text-primary font-medium">
          View All Projects →
        </Link>
      </div>
    </section>
  );
}
