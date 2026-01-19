"use client";
import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "../../Components/ImageLightbox";


const flexSignboards = [
  "/assets/flex/1.png",
  "/assets/flex/2.png",
  "/assets/flex/3.png",
  "/assets/flex/4.png",
  "/assets/flex/5.png",
  "/assets/flex/6.png",
  "/assets/flex/7.png",
  "/assets/flex/8.png",
];

export default function FlexSignboards() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 text-left text-primary">
          Flex Signboards
        </h2>

        {/* Professional Long Content */}
        <div className="max-w-4xl mb-14">
          <p className="text-gray-700 mb-6 leading-relaxed">
            At Qamar Advertising, we design and manufacture high-quality
            <strong> flex signboards in Sharjah, UAE</strong> that offer excellent
            visibility, affordability, and durability. Flex signboards are one
            of the most popular advertising solutions for businesses looking to
            maximize brand exposure while maintaining cost efficiency. With
            vibrant colors and large-format printing, flex signage ensures your
            message stands out both day and night.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Our flex signboards are ideal for shops, restaurants, malls,
            showrooms, warehouses, and outdoor advertising. We use premium-grade
            flex materials combined with advanced printing technology to deliver
            sharp visuals, weather resistance, and long-lasting performance.
            Whether illuminated or non-illuminated, our flex signage solutions
            are tailored to suit your branding requirements and business goals.
          </p>

          <p className="text-gray-700 leading-relaxed">
            From design consultation to fabrication and installation, Qamar
            Advertising provides complete flex signboard solutions. Our expert
            team ensures compliance with local regulations and delivers signage
            that enhances brand visibility, attracts customers, and strengthens
            your market presence across Sharjah and the UAE.
          </p>
        </div>

        {/* Different Style Image Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {flexSignboards.map((src, index) => (
            <div
              key={index}
              className="relative h-56 overflow-hidden rounded-2xl group"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Flex Signboard ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
