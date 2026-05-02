import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center bg-white shadow-lg rounded-2xl p-10 max-w-md w-full">
        <h1 className="text-7xl font-bold text-black">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-600">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
