"use client";
import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "../../Components/ImageLightbox";

const mallImages = [
  "/assets/mall/1.png",
  "/assets/mall/2.png",
  "/assets/mall/3.png",
  "/assets/mall/4.png",
  "/assets/mall/5.png",
  "/assets/mall/6.png",
];

export default function MallSignboards() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="max-w-4xl mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Mall Signboards
          </h1>
          <p className="text-gray-700 text-normal leading-relaxed mb-6">
            At <strong>Qamar Advertising</strong>, we design premium mall
            signboards that enhance customer navigation, strengthen brand
            identity, and elevate the overall shopping experience. Our signage
            solutions are crafted to align with modern mall interiors while
            maintaining clear visibility.
          </p>
          <p className="text-gray-700 text-normal leading-relaxed">
            From storefront signage to directional and promotional displays,
            our mall signboards combine aesthetics, durability, and precision.
            Every design is developed to integrate seamlessly with architectural
            elements and branding standards.
          </p>
        </div>

        {/* Image Layout */}
        <div className="grid md:grid-cols-3 gap-4">
          {mallImages.map((img, index) => (
            <div
              key={index}
              className="relative h-56 rounded-2xl overflow-hidden shadow-md group"
              onClick={() => setSelectedImage(img)} 
            >
              <Image
                src={img}
                alt={``}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
