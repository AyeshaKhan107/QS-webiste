"use client";
import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "../../Components/ImageLightbox";

const images = [
  "/Assets/outdoor/1.png",
  "/Assets/outdoor/2.png",
  "/Assets/outdoor/3.png",
  "/Assets/outdoor/4.png",
  "/Assets/outdoor/6.png",
  "/Assets/outdoor/5.png",
  "/Assets/outdoor/7.png",
  "/Assets/outdoor/8.png",
];

export default function OutdoorSignboards() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 space-y-24">
        {/* SECTION 1 : Data Left / Images Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Outdoor Signboards
            </h2>
            <p className="text-gray-700 text-lg mb-5 leading-relaxed">
              <strong>Qamar Advertising</strong> delivers premium outdoor
              signboards designed to elevate brand visibility in high-impact
              locations. Our signage solutions combine durability, clarity, and
              modern aesthetics to ensure your business stands out in
              competitive environments.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We specialize in weather-resistant materials, precision
              fabrication, and visually balanced designs that perform
              consistently under outdoor conditions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {images.slice(0, 4).map((img, i) => (
              <div key={i} className="relative h-32 rounded-xl overflow-hidden" onClick={() => setSelectedImage(img)}>
                <Image
                  src={img}
                  alt="Outdoor signboard"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2 : Images Left / Data Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-2">
            {images.slice(4, 8).map((img, i) => (
              <div key={i} className="relative h-32 rounded-xl overflow-hidden" onClick={() => setSelectedImage(img)}>
                <Image
                  src={img}
                  alt="Outdoor signage"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-6 text-primary">
              Professional Outdoor Branding Solutions
            </h3>
            <p className="text-gray-700 text-lg mb-5 leading-relaxed">
              From large building signboards to illuminated outdoor displays,
              our team ensures every project meets branding goals and local
              regulatory standards. We focus on visibility, legibility, and
              long-term performance.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Qamar Advertising manages complete outdoor signage solutions —
              from concept development to installation — helping businesses
              build trust and recognition across Sharjah and the UAE.
            </p>
          </div>
        </div>

        {/* BOTTOM : 2 Images Center */}
        <div className="flex justify-center gap-6">
          {images.slice(6, 8).map((img, i) => (
            <div
              key={i}
              className="relative w-60 h-40 rounded-2xl overflow-hidden"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img}
                alt="Outdoor signboard showcase"
                fill
                className="object-cover hover:scale-105 transition duration-500"
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
