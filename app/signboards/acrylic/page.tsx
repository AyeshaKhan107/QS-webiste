"use client";
import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "../../Components/ImageLightbox";

const acrylicSignboards = [ 
  "/assets/acrylic/1.png",
  "/assets/acrylic/2.png",
  "/assets/acrylic/3.png",
  "/assets/acrylic/4.png",
  "/assets/acrylic/5.png",
  "/assets/acrylic/6.png",
  "/assets/acrylic/7.png",
  "/assets/acrylic/8.png",
  "/assets/acrylic/9.png",
  "/assets/acrylic/10.png",
];

export default function AcrylicSignboards() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 text-center text-primary">
          3D Acrylic Signboards 
        </h2>

        {/* Long descriptive text */}
        <p className="text-gray-700 mb-6 max-w-4xl mx-auto text-center">
          At Qamar Advertising, we specialize in creating stunning <strong>3D acrylic signboards in Sharjah, UAE</strong> that combine elegance, durability, and brand visibility. 
          Our team leverages over 10+ years of experience to design and manufacture acrylic signage that leaves a lasting impression on your clients and visitors. 
          Each signboard is crafted with precision, attention to detail, and high-quality materials to ensure it reflects the professionalism of your business.  
        </p>
        <p className="text-gray-700 mb-6 max-w-4xl mx-auto text-center">
          Whether it’s for office branding, retail spaces, or commercial establishments, our <strong>3D acrylic signs</strong> are designed to enhance your brand’s identity and visual appeal. 
          We also provide guidance on color choices, lighting options, and installation techniques to make sure your signboard not only looks amazing but is long-lasting and compliant with local regulations.  
        </p>
        <p className="text-gray-700 mb-12 max-w-4xl mx-auto text-center">
           We are committed to providing <strong>cost-effective and efficient signboard solutions</strong> that elevate your business’s presence. 
          Explore our collection below to see examples of our premium 3D acrylic signboards and discover how we can transform your brand’s visual identity.  
        </p>

        {/* Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {acrylicSignboards.map((src, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(src)}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={src}
                  alt ={`Acrylic Signboard ${index + 1}`}
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
