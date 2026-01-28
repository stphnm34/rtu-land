import { PropertyGallery } from "@/components/gallery/PropertyGallery";

type Unit = {
  type: string;
  status: string;
  price: string;
};

type Developer = {
  name: string;
  logo?: string;
  description?: string;
};

type Property = {
  title: string;
  location: string;
  price: string;
  status?: string;
  slug: string;
  images: string[];
  description?: string;
  units?: Unit[];
  amenities?: string[];
  features?: string[];
  mapEmbed?: string;
  developer?: Developer;
};

const placeholderData: Property[] = [
  {
    title: "Robins Lane",
    location: "Liloan, Cebu",
    price: "Price Upon Request",
    slug: "robins-lane",
    images: [
      "/placeholder/property1.jpg",
      "/placeholder/property1b.jpg",
      "/placeholder/property1c.jpg",
    ],
    status: "Pre-Selling",
    description:
      "Beautiful pre-selling project in Liloan with modern townhouses.",
    units: [
      { type: "2BR Townhouse", status: "Available", price: "₱3.2M" },
      { type: "3BR Townhouse", status: "Sold", price: "₱4.1M" },
    ],
    amenities: [
      "Clubhouse",
      "Playground",
      "Open Spaces",
      "Parking Spaces",
    ],
    features: [
      "Gated Community",
      "24/7 Security",
      "Concrete Roads",
      "Perimeter Fence",
    ],
    developer: {
      name: "RTU Land",
      logo: "/placeholder/developer-logo.png",
      description:
        "RTU Land is a Cebu-based real estate developer focused on modern homes designed for families and investors.",
    },
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.370141802814!2d123.951!3d10.40695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99c3a1118c3f5%3A0x3fb5719dc3b35b4a!2sCebu!5e0!3m2!1sen!2sph!4v1674435529900!5m2!1sen!2sph",
  },
  {
    title: "Sample Property",
    location: "Talisay, Cebu",
    price: "₱2.8M",
    slug: "sample-property",
    images: [
      "/placeholder/property2.jpg",
      "/placeholder/property2b.jpg",
    ],
    status: "RFO",
    description:
      "Ready for Occupancy units with financing options available.",
    units: [
      { type: "Studio Condo", status: "Fully Booked", price: "₱2.4M" },
      { type: "1BR Condo", status: "Available", price: "₱3.1M" },
    ],
    amenities: [
      "Fitness Gym",
      "Pool",
      "Parking",
    ],
    features: [
      "24/7 Security",
      "Elevator Access",
      "Lobby Lounge",
    ],
    developer: {
      name: "RTU Land",
      logo: "/placeholder/developer-logo.png",
      description:
        "RTU Land focuses on modern residential developments designed for comfort and long-term value.",
    },
  },
];

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const property = placeholderData.find((p) => p.slug === slug);

  if (!property) {
    return (
      <div className="container mx-auto py-12">
        Property not found
      </div>
    );
  }

  // ⭐ RELATED PROPERTIES FILTERING LOGIC
  const related = placeholderData
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const scoreA =
        (a.location === property.location ? 2 : 0) +
        (a.status === property.status ? 1 : 0);
      const scoreB =
        (b.location === property.location ? 2 : 0) +
        (b.status === property.status ? 1 : 0);
      return scoreB - scoreA;
    })
    .slice(0, 3);

  return (
    <div className="container mx-auto py-12 space-y-8">
      {/* GALLERY */}
      <PropertyGallery images={property.images} />

      {/* HEADER / KEY FACTS */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">{property.title}</h1>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-lg font-semibold text-primary">{property.price}</p>
        {property.status && (
          <span className="inline-block text-xs bg-blue-50 text-blue-600 font-medium px-2 py-0.5 rounded">
            {property.status}
          </span>
        )}
      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-700 leading-relaxed">
        {property.description}
      </p>

      {/* UNIT TYPES */}
      {property.units && (
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Unit Types</h2>
          <table className="w-full text-sm border">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-2">Unit Type</th>
                <th className="text-left p-2">Status</th>
                <th className="text-left p-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {property.units.map((u, i) => (
                <tr key={i} className="border-b">
                  <td className="p-2">{u.type}</td>
                  <td className="p-2">{u.status}</td>
                  <td className="p-2">{u.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* DEVELOPER */}
      {property.developer && (
        <div className="space-y-3 border-t pt-6">
          <h2 className="text-xl font-semibold">Developer</h2>
          <div className="flex items-center gap-4">
            {property.developer.logo && (
              <img
                src={property.developer.logo}
                alt={property.developer.name}
                className="h-12 object-contain"
              />
            )}
            <div>
              <p className="font-medium">{property.developer.name}</p>
              <p className="text-sm text-gray-600">
                {property.developer.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA - DESKTOP */}
      <div className="hidden md:flex gap-3 border-t pt-6">
        <a href="https://m.me/rtuland" target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">Messenger</a>
        <a href="viber://chat?number=+639123456789" className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium">Viber</a>
        <a href="tel:+639123456789" className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium">Call</a>
        <a href="mailto:info@rtuland.com" className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm font-medium">Email</a>
      </div>

      {/* CTA - MOBILE */}
      <div className="fixed bottom-0 inset-x-0 bg-white p-3 flex gap-2 border-t md:hidden">
        <a href="https://m.me/rtuland" target="_blank" className="flex-1 px-4 py-2 bg-blue-600 text-white text-center rounded-md text-sm font-medium">Messenger</a>
        <a href="viber://chat?number=+639123456789" className="flex-1 px-4 py-2 bg-purple-600 text-white text-center rounded-md text-sm font-medium">Viber</a>
      </div>

      {/* AMENITIES */}
      {property.amenities && (
        <div className="space-y-3 border-t pt-6">
          <h2 className="text-xl font-semibold">Amenities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {property.amenities.map((a, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span>⭐</span>
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FEATURES */}
      {property.features && (
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Features</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {property.features.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      {/* MAP */}
      {property.mapEmbed && (
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Location</h2>
          <iframe
            src={property.mapEmbed}
            width="100%"
            height="350"
            className="rounded-xl border w-full"
            loading="lazy"
          />
        </div>
      )}

      {/* RELATED */}
      {related.length > 0 && (
        <div className="space-y-3 border-t pt-6">
          <h2 className="text-xl font-semibold">Related Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((p) => (
              <a
                key={p.slug}
                href={`/properties/${p.slug}`}
                className="border rounded-lg p-3 hover:shadow-sm transition block"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-md mb-2">
                  <img
                    src={p.images[0]}
                    className="object-cover w-full h-full"
                    alt={p.title}
                  />
                </div>
                <p className="font-medium">{p.title}</p>
                <p className="text-sm text-gray-600">{p.location}</p>
                <p className="text-sm text-primary font-semibold">{p.price}</p>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
