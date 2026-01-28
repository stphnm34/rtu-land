import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-24">
      <div className="container mx-auto px-6 max-w-6xl grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">RTU Land</h3>
          <p className="text-sm">
            Building communities designed for modern living in Cebu.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h4 className="font-medium text-white">Quick Links</h4>
          <div className="flex flex-col text-sm space-y-1">
            <Link href="/">Home</Link>
            <Link href="/properties">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>

        {/* Property Types */}
        <div className="space-y-2">
          <h4 className="font-medium text-white">Property Types</h4>
          <div className="flex flex-col text-sm space-y-1">
            <span>Townhouses</span>
            <span>Houses</span>
            <span>Condos</span>
            <span>Lots</span>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h4 className="font-medium text-white">Contact</h4>
          <div className="text-sm space-y-1">
            <p>Cebu, Philippines</p>
            <p>+63 900 000 0000</p>
            <p>info@rtuland.com</p>
          </div>
        </div>

      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} RTU Land. All rights reserved.
      </div>
    </footer>
  );
}
