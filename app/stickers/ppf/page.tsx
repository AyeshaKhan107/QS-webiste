"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "../../Components/ImageLightbox";

export default function VehiclePPF() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/Assets/ppf/1.png",
    "/Assets/ppf/2.png",
    "/Assets/ppf/3.png",
  ];

  return (
    <section className="w-full min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-16">
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
            <li className="flex items-center gap-2">✔ Clear, invisible protection</li>
            <li className="flex items-center gap-2">✔ Scratch & chip resistance</li>
            <li className="flex items-center gap-2">✔ UV and weatherproof</li>
            <li className="flex items-center gap-2">✔ Maintains original paint finish</li>
          </ul>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {images.map((imgSrc, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-md cursor-pointer"
            >
              <Image
                src={imgSrc}
                alt={``}
                fill
                onClick={() => setSelectedImage(imgSrc)}
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox */}
      {selectedImage && (
        <ImageLightbox
          src={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}
