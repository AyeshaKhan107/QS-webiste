"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "../../Components/ImageLightbox";

export default function Sticker() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/Assets/stickers/1.png",
    "/Assets/stickers/2.png",
    "/Assets/stickers/3.png",
    "/Assets/stickers/4.png",
  ];

  return (
    <section className="w-full min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-16 flex items-center">
      
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Sticker Branding
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">
            Our custom sticker branding solutions help businesses stand out with
            high-quality, durable, and visually striking stickers. Perfect for
            product packaging, promotions, and brand visibility.
          </p>

          <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
            <li className="flex items-center gap-2">✔ Waterproof & weather-resistant</li>
            <li className="flex items-center gap-2">✔ Custom shapes & sizes</li>
            <li className="flex items-center gap-2">✔ Premium print quality</li>
            <li className="flex items-center gap-2">✔ Ideal for indoor & outdoor use</li>
          </ul>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-4">
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
