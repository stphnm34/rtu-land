export function WhyChoose() {
  const items = [
    {
      title: "Trusted Developer",
      description:
        "Delivering projects with quality standards and long-term value for homeowners and investors.",
    },
    {
      title: "Strategic Locations",
      description:
        "Communities situated near schools, malls, hospitals, and transportation hubs across Cebu.",
    },
    {
      title: "Smart & Practical Homes",
      description:
        "Modern layouts designed for real families — maximizing space, comfort, and efficiency.",
    },
    {
      title: "Flexible Financing",
      description:
        "Options available through banks, Pag-IBIG, and in-house financing depending on the project.",
    },
  ];

  return (
    <section className="container mx-auto px-6 max-w-6xl space-y-10">
      <div className="space-y-2 text-center">
        <div className="text-sm uppercase tracking-wide text-primary/80">
          Why Choose RTU Land
        </div>
        <h2 className="text-3xl font-semibold">Your Next Home, Smartly Built</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We create communities that balance affordability, functionality, and modern living.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div key={i} className="space-y-2">
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
