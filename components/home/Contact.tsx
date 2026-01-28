export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-6 max-w-4xl py-16 space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-semibold">Get In Touch</h2>
        <p className="text-gray-600">
          Send us a message and we’ll get back to you within 24 hours.
        </p>
      </div>

      <form className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border rounded-md px-3 py-2 text-sm"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border rounded-md px-3 py-2 text-sm"
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          className="border rounded-md px-3 py-2 text-sm w-full"
          required
        />

        <textarea
          placeholder="Tell us what you're looking for..."
          className="border rounded-md px-3 py-2 text-sm w-full"
          rows={4}
          required
        />

        <button
          type="submit"
          className="px-6 py-2 bg-primary text-white rounded-md font-medium text-sm"
        >
          Submit Inquiry
        </button>
      </form>
    </section>
  );
}
