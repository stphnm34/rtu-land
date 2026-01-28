export function DeveloperShowcase() {
  return (
    <section className="container mx-auto px-6 max-w-6xl space-y-10">
      {/* Header */}
      <div className="space-y-2 text-center">
        <div className="text-sm uppercase tracking-wide text-primary/80">
          About RTU Land
        </div>
        <h2 className="text-3xl font-semibold">
          Building Communities for Modern Cebu
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We develop thoughtfully planned communities designed for families,
          professionals, and investors seeking smart and affordable living in Cebu.
        </p>
      </div>

      {/* Image Placeholder */}
      <div className="w-full h-[380px] rounded-xl bg-gray-100 overflow-hidden">
        <img
          src="/placeholder/developer.jpg"
          alt="RTU Land Developer Showcase"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Company Message */}
      <div className="max-w-3xl mx-auto text-center space-y-3">
        <p className="text-gray-700 leading-relaxed">
          With a commitment to quality, functionality, and long-term value, RTU
          Land focuses on creating homes and communities that align with the
          needs of modern Filipino families.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our developments emphasize accessibility, financing options, and
          strategic growth – ensuring every investment is a step toward a more
          secure and comfortable future.
        </p>
      </div>
    </section>
  );
}
