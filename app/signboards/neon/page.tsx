"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageLightbox from "../../Components/ImageLightbox";
export default function NeonSignsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    "/assets/neon/1.png",
    "/assets/neon/2.png",
    "/assets/neon/3.png",
    "/assets/neon/4.png",
  ];

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start gap-10">
        
        {/* Left side text */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-6 text-primary">Neon Signs</h1>
          <p className="text-lg text-gray-700 mb-6">
            Neon signs add a vibrant and stylish look to your brand, perfect for shops, cafés, and indoor branding. 
            They create a striking visual impact that draws attention and enhances the overall atmosphere of your space. 
            With various colors and custom designs, neon signage is an excellent choice for businesses seeking a modern, 
            eye-catching presentation.
          </p>
          <Link
            href="/contact"
            className="bg-primary text-white px-5 py-2 rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Get a Quote
          </Link>
        </div>

        {/* Right side images 2x2 grid */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden shadow-lg h-40 md:h-48" onClick={() => setSelectedImage(img)}>
              <Image
                src={img}
                alt={``}
                fill
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 bg-black/50 text-white px-2 py-1 text-sm w-full">
                 
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
    </main>
  );
}
