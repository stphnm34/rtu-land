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

  const normalizedStatus = status?.toLowerCase();

  return (
    <Link
      href={`/properties/${slug}`}
      className="group block border rounded-lg overflow-hidden hover:shadow-md transition"
    >
      {/* IMAGE WRAPPER */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">

        {/* STATUS BADGES */}
        {normalizedStatus === "sold" && (
          <div className="absolute top-2 left-0 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-r-md shadow">
            SOLD
          </div>
        )}

        {normalizedStatus === "pre-selling" && (
          <div className="absolute top-2 left-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-r-md shadow">
            PRE-SELLING
          </div>
        )}

        {normalizedStatus === "rfo" && (
          <div className="absolute top-2 left-0 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-r-md shadow">
            RFO
          </div>
        )}

        {/* IMAGE */}
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition group-hover:scale-105 ${
            normalizedStatus === "sold" ? "grayscale opacity-75" : ""
          }`}
        />
      </div>

      {/* CARD CONTENT */}
      <div className="p-4 space-y-1">
        <p className="text-sm text-gray-600">{location}</p>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="font-medium text-primary">{price}</p>
      </div>
    </Link>
  );
}
