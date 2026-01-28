export function Stats() {
  const stats = [
    { value: "3+", label: "Active Projects" },
    { value: "100+", label: "Homes & Units" },
    { value: "2+", label: "Cities in Cebu" },
    { value: "5+", label: "Years Experience" },
  ];

  return (
    <section className="bg-gray-50 py-14">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((item, i) => (
            <div key={i} className="space-y-2">
              <div className="text-3xl font-semibold text-gray-900">
                {item.value}
              </div>
              <div className="text-sm text-gray-600">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
