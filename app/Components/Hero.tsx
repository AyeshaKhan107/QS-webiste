"use client";

import Link from "next/link";
import Carousel from "./Carousel";

export default function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      
      {/* Carousel background */}
      <div className="absolute inset-0 z-0">
        <Carousel />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Hero content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Signage Making Company in Sharjah
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            At Qamar Advertising, we provide quality signage solutions in Sharjah,
            UAE. With over 10 years of experience, we design signboards that look
            professional and make a strong first impression.
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold"
            >
              Get in Touch
            </Link>

            <Link
              href="/about"
              className="border-2 border-white px-8 py-4 rounded-lg font-semibold"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
