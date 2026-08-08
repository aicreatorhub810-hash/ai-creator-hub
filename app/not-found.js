import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 text-center">
      <div className="max-w-md mx-auto px-6">
        <span className="font-display text-6xl font-bold text-blue block mb-4">404</span>
        <h1 className="font-display text-2xl font-bold mb-3">Page not found</h1>
        <p className="text-muted mb-8">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          href="/"
          className="inline-flex px-7 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-br from-blue to-blue-deep hover:-translate-y-0.5 transition"
        >
          Back to Homepage
        </Link>
      </div>
    </section>
  );
}
