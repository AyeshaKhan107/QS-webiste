"use client";
import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "../../Components/ImageLightbox";
import Link from "next/link";

export default function LedSignboardsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    "/Assets/images/signboards/led/led1.jpg",
    "/Assets/images/signboards/led/led2.jpg",
    "/Assets/images/signboards/led/led3.jpg",
    "/Assets/images/signboards/led/led4.jpg",
  ];

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-5xl font-bold mb-6">LED Signboards</h1>
        <p className="text-lg text-gray-700 max-w-3xl mb-10">
          Our LED signboards are designed to deliver maximum visibility, energy efficiency, and long-lasting performance for all types of businesses. 
          They are ideal for indoor and outdoor advertising, retail shops, restaurants, and offices. With a combination of vibrant colors and durable materials, 
          LED signage is a premium solution for capturing attention and enhancing brand presence in the UAE market.
        </p>

        {/* Images grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden shadow-lg" onClick={() => setSelectedImage(img)}>
              <Image
                src={img}
                alt={`LED Signboard ${i + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
              {/* Side text overlay */}
              <div className="absolute bottom-0 left-0 bg-black/50 text-white px-4 py-2 w-full text-sm">
                LED Signboard {i + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Contact button */}
        <div className="mt-12">
          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Get a Quote
          </Link>
        </div>
      </div>
      {/* Fullscreen Lightbox */}
      <ImageLightbox
        src={selectedImage}
        onClose={() => setSelectedImage(null)}
      />  
    </main>
      
  );
}
