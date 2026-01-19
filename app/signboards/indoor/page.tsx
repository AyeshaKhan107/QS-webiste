"use client";
import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "../../Components/ImageLightbox";


const indoorSignboardsImages = [
  "/Assets/indoor/1.png",
  "/Assets/indoor/2.png",
  "/Assets/indoor/3.png",
  "/Assets/indoor/4.png",
  "/Assets/indoor/5.png",
  "/Assets/indoor/6.png",
  "/Assets/indoor/7.png",
  "/Assets/indoor/8.png",
];

export default function IndoorSignboards() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-start gap-12">
        
        {/* Left side: Images */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 lg:w-1/2">
          {indoorSignboardsImages.map((src, index) => (
            <div
              key={index}
              className="relative h-40 w-full rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`images of indoor signboard ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right side: Long descriptive text */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">
            Indoor Signboards
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            At <strong>Qamar Advertising</strong>, we specialize in designing stunning indoor signboards that elevate the aesthetics and functionality of your interiors. 
            Our solutions include office signage, retail displays, wayfinding systems, and decorative branding elements that seamlessly integrate with your space. 
          </p>
          <p className="text-gray-700 mb-4 text-lg">
            Using high-quality materials and modern manufacturing techniques, each indoor signboard is crafted for durability, elegance, and visual impact. 
            From acrylic and metal finishes to illuminated and 3D designs, we ensure your indoor environment is not only functional but also visually appealing.
          </p>
          <p className="text-gray-700 mb-4 text-lg">
            Our experienced team at Qamar Advertising works closely with you to select the perfect design, colors, and layout, guaranteeing that every signboard reflects your brand identity. 
            With a focus on creativity, precision, and professionalism, we bring your indoor signage vision to life, making a lasting impression on employees, clients, and visitors alike.
          </p>

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
