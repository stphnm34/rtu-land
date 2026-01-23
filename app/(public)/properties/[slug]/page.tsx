import { PropertyGallery } from "@/components/gallery/PropertyGallery";

type Property = {
  title: string;
  location: string;
  price: string;
  status?: string;
  slug: string;
  images: string[];
  description?: string;
};

// placeholder data for now
const placeholderData: Property[] = [
  {
    title: "Robin’s Lane",
    location: "Liloan, Cebu",
    price: "Price Upon Request",
    slug: "robins-lane",
    images: [
      "/placeholder/property1.jpg",
      "/placeholder/property1b.jpg",
      "/placeholder/property1c.jpg",
    ],
    status: "Pre-Selling",
    description: "Beautiful pre-selling project in Liloan with modern townhouses."
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
    description: "Ready for Occupancy units with financing options available."
  }
];

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  // 🔎 LOOKUP HAPPENS HERE
  const property = placeholderData.find((p) => p.slug === params.slug);

  if (!property) {
    return <div className="container mx-auto py-12">Property not found</div>;
  }

  // 👇 AND YOUR RETURN BLOCK GOES HERE
  return (
    <div className="container mx-auto py-12 space-y-6">
      <PropertyGallery images={property.images} />

      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">{property.title}</h1>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-lg font-semibold text-primary">{property.price}</p>
      </div>

      <p className="text-gray-700 leading-relaxed">
        {property.description}
      </p>
    </div>
  );
}
