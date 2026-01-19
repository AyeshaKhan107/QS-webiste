// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import ImageLightbox from "../../Components/ImageLightbox";
// import image from "next/image";
// // import ImageLightbox from "@/components/ImageLightbox";
// export default function VehicleFullWrapping() {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   return (
//     <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      
//       {/* Content Wrapper */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
//         {/* Left Content */}
//         <div>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary">
//             Vehicle Full Wrapping
//           </h2>

//           <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">
//             Give your vehicles a complete makeover with our full vehicle wrapping services. 
//             Our high-quality wraps not only protect your car&apos;s surface but also turn it into a moving advertisement.
//           </p>

//           <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
//             <li className="flex items-center gap-2">✔ Full car coverage</li>
//             <li className="flex items-center gap-2">✔ Custom branding & designs</li>
//             <li className="flex items-center gap-2">✔ Premium vinyl materials</li>
//             <li className="flex items-center gap-2">✔ Long-lasting outdoor durability</li>
//           </ul>
//         </div>

//         {/* Right Images */}
//         <div className="grid grid-cols-2 gap-4">
//           {["1", "2", "3", "4"].map((img) => (
//             <div
//               key={img}
//               className="relative aspect-square overflow-hidden rounded-2xl shadow-md"
//             >
//               <Image
//                 onClick={() => setSelectedImage(`/Assets/wrapping${img}.png`)}
//                 src={`/Assets/wrapping${img}.png`}
//                 alt={``}
//                 fill
//                 className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           ))}
//         </div>

//       </div>
//       {/* Fullscreen Lightbox */}
//             <ImageLightbox
//               src={selectedImage}
//               onClose={() => setSelectedImage(null)}
//             />
//     </section>
    
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "../../Components/ImageLightbox";

export default function VehicleFullWrapping() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Images array
  const images = [
    "/Assets/wrapping/image1.png",
    "/Assets/wrapping/image2.png",
    "/Assets/wrapping/image3.png",
    "/Assets/wrapping/image4.png",
  ];

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      
      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Vehicle Full Wrapping
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">
            Give your vehicles a complete makeover with our full vehicle wrapping services. 
            Our high-quality wraps not only protect your car&apos;s surface but also turn it into a moving advertisement.
          </p>

          <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
            <li className="flex items-center gap-2">✔ Full car coverage</li>
            <li className="flex items-center gap-2">✔ Custom branding & designs</li>
            <li className="flex items-center gap-2">✔ Premium vinyl materials</li>
            <li className="flex items-center gap-2">✔ Long-lasting outdoor durability</li>
          </ul>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((imgSrc, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-md cursor-pointer"
            >
              <Image
                onClick={() => setSelectedImage(imgSrc)}
                src={imgSrc}
                alt={`Vehicle Wrapping ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox */}
      {selectedImage && (
        <ImageLightbox
          src={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}

    </section>
  );
}
