"use client";
import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "../../Components/ImageLightbox";

export default function VehiclePPF() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-16">
      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Vehicle PPF (Paint Protection Film)
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">
            Protect your vehicle&apos;s paint with our premium Paint Protection
            Film (PPF). Our PPF services ensure long-lasting protection against
            scratches, chips, and environmental damage.
          </p>

          <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
            <li className="flex items-center gap-2">
              ✔ Clear, invisible protection
            </li>
            <li className="flex items-center gap-2">
              ✔ Scratch & chip resistance
            </li>
            <li className="flex items-center gap-2">✔ UV and weatherproof</li>
            <li className="flex items-center gap-2">
              ✔ Maintains original paint finish
            </li>
          </ul>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {["1", "2", "3"].map((img) => (
            <div
              key={img}
              className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-md"
            >
              <Image
                onClick={() => setSelectedImage(`/assets/ppf/${img}.png`)}
                src={`/assets/ppf/${img}.png`}
                alt={`PPF sample ${img}`}
                fill
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Fullscreen Lightbox */}
      <ImageLightbox
        src={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
