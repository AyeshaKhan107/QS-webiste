"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "../../Components/ImageLightbox";

export default function OneVisionStickers() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/Assets/ov/1.png",
    "/Assets/ov/2.png",
    "/Assets/ov/3.png",
  ];

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            OneVision Stickers
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">
            OneVision stickers are designed to be eye-catching and durable. 
            Perfect for branding, promotions, and personal use, each sticker is crafted with attention to detail.
          </p>

          <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
            <li className="flex items-center gap-2">✔ High-quality vinyl</li>
            <li className="flex items-center gap-2">✔ Waterproof & fade-resistant</li>
            <li className="flex items-center gap-2">✔ Custom shapes and sizes</li>
            <li className="flex items-center gap-2">✔ Easy to apply & remove</li>
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
