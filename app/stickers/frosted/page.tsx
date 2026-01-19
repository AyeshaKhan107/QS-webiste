"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "../../Components/ImageLightbox";

export default function FrostedStickers() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary">
              Frosted Stickers
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">
              Frosted stickers give your windows and glass surfaces a sleek,
              semi-transparent look.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Elegant frosted finish</li>
              <li>✔ Durable & long-lasting</li>
              <li>✔ Easy to apply and remove</li>
              <li>✔ Custom shapes and designs</li>
            </ul>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {["1", "2", "3", "4"].map((img) => {
              const src = `/assets/frosted/${img}.png`;

              return (
                <div
                  key={img}
                  onClick={() => setSelectedImage(src)}
                  className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-md cursor-pointer group"
                >
                  <Image
                    src={src}
                    alt={`Frosted sticker ${img}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Fullscreen Lightbox */}
      <ImageLightbox
        src={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}
