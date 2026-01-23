export function Footer() {
  return (
    <footer className="w-full border-t mt-16 px-6 py-8 text-sm text-gray-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4">
        <span>© {new Date().getFullYear()} RTU Land. All rights reserved.</span>

        <div className="flex gap-4">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}