export function CTA() {
  return (
    <section className="bg-primary/90 text-white py-16">
      <div className="container mx-auto px-6 max-w-5xl text-center space-y-4">
        <h2 className="text-3xl font-semibold">
          Ready to Find Your Next Home or Investment?
        </h2>
        <p className="text-white/80 max-w-xl mx-auto">
          RTU Land offers smart, accessible, and future-ready homes for families
          and investors in Cebu.
        </p>

        <div className="flex justify-center gap-4 pt-2">
          <a
            href="/properties"
            className="px-6 py-2.5 bg-white text-gray-900 rounded-md font-medium text-sm"
          >
            Browse Properties
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 border border-white/40 text-white rounded-md font-medium text-sm"
          >
            Contact an Agent
          </a>
        </div>
      </div>
    </section>
  );
}
