"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-xl text-center">
        
        {/* 404 Heading */}
        <h1 className="text-7xl sm:text-8xl font-extrabold text-primary mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-8 text-base sm:text-lg">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-white font-medium hover:bg-primary/90 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => history.back()}
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-medium hover:bg-gray-100 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}
