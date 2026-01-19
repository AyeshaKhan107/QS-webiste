"use client";
import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "../../Components/ImageLightbox";

const rooftopSignboards = [
  "/assets/rooftop/1.png",
  "/assets/rooftop/2.png",
  "/assets/rooftop/3.png",
  "/assets/rooftop/4.png",
  "/assets/rooftop/5.png",
  "/assets/rooftop/6.png",
];

export default function RooftopSignboards() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-center text-primary">
          Rooftop Signboards
        </h2>

        {/* Description */}
        <p className="text-gray-700 mb-12 max-w-4xl mx-auto text-center">
          Elevate your brand visibility with our premium <strong>rooftop signboards</strong>. 
          Perfect for commercial buildings, offices, and retail spaces, our designs combine aesthetic appeal with durable construction. 
          Each signboard is crafted to withstand the elements while maximizing your brand exposure from afar.
        </p>

        {/* Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {rooftopSignboards.map((src, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(src)}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-50 w-full">
                <Image
                  src={src}
                  alt={`srooftop Signboard ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            

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
