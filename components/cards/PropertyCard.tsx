import Image from "next/image";
import Link from "next/link";

type PropertyCardProps = {
  title: string;
  location: string;
  price: string;
  status?: string;
  slug: string;
  image: string;
};

export function PropertyCard({
  title,
  location,
  price,
  status,
  slug,
  image,
}: PropertyCardProps) {
  return (
    <Link
      href={`/properties/${slug}`}
      className="group block border rounded-lg overflow-hidden hover:shadow-md transition"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
      {status === "Sold" && (
  <div className="absolute top-2 left-0 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-r-md shadow">
    SOLD
  </div>
)}

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition group-hover:scale-105"
        />
      </div>

      <div className="p-4 space-y-1">
        <h3 className="font-semibold text-lg">{{status === "Pre-Selling" && (
  <span className="inline-block text-xs bg-blue-50 text-blue-600 font-medium px-2 py-0.5 rounded">
    Pre-Selling
  </span>
)}

{status === "RFO" && (
  <span className="inline-block text-xs bg-green-50 text-green-600 font-medium px-2 py-0.5 rounded">
    Ready for Occupancy
  </span>
)}
}</h3>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="font-medium text-primary">{price}</p>
      </div>
    </Link>
  );
}
