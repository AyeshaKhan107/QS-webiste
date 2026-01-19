"use client";
import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "../../Components/ImageLightbox";

const parkingSignboards = [
 "/Assets/parking/1.png",
 "/Assets/parking/2.png",
 "/Assets/parking/3.png",
 "/Assets/parking/4.png",
 "/Assets/parking/5.png",
 "/Assets/parking/6.png",
];

export default function ParkingSignboards() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-center text-primary">
          Parking Signboards
        </h2>

        {/* Long descriptive text */}
        <p className="text-gray-700 mb-8 max-w-4xl mx-auto text-center">
          At <strong>Qamar Advertising</strong>, we specialize in designing and manufacturing premium parking signboards that combine functionality, style, and durability. 
          Our parking solutions are ideal for commercial buildings, retail outlets, and corporate offices, ensuring your brand is always visible and professional. 
          With over a decade of experience in the signage industry, we focus on creating signs that not only guide visitors but also enhance the aesthetics of your property. 
          From LED-lit signs to sleek metallic boards, each piece is carefully crafted to meet high-quality standards and leave a lasting impression.
        </p>

        {/* Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {parkingSignboards.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              className="relative bg-white rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-500 transform hover:scale-105"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={item}
                  alt={item}
                  fill
                  className="object-cover"
                />
              
              </div>
            </div>
          ))}
        </div>

      {/* Fullscreen Lightbox */}
      <ImageLightbox
        src={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

        {/* Footer note */}
        <p className="text-gray-600 mt-10 max-w-2xl mx-auto text-center text-sm">
          Trust <strong>Qamar Advertising</strong> for professional signage solutions that set your business apart.
        </p>
      </div>
    </section>
  );
}
