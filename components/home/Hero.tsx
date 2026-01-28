export function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/placeholder/hero.jpg"
          alt="RTU Land Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <div className="space-y-4">
          <div className="text-white/80 text-sm uppercase tracking-wide">
            Modern Homes in Cebu
          </div>

          <h1 className="text-white text-4xl md:text-6xl font-semibold leading-tight">
            Building Homes for
            <br />
            <span className="text-white font-bold">Modern Living</span>
          </h1>

          <p className="text-white/80 max-w-lg text-base md:text-lg">
            Discover thoughtfully designed communities built for families,
            investors, and individuals seeking smart and comfortable living in Cebu.
          </p>

          <div className="flex gap-3 pt-2">
            <a
              href="/properties"
              className="px-5 py-2.5 bg-white text-gray-900 rounded-md font-medium text-sm"
            >
              Browse Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-white/10 border border-white/30 text-white rounded-md font-medium text-sm backdrop-blur"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center">
        <div className="text-white/70 text-xs tracking-wide">
          Scroll to explore
        </div>
      </div> 
    </section>
  );
}
