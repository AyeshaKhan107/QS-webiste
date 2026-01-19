// "use client"
// import { useState, useEffect } from "react"
// import { CreditCard, FileText, BookOpen } from "lucide-react"
// import Image from "next/image";

// export default function OffersSection() {
//   const [imageAnimationStates, setImageAnimationStates] = useState({
//     image1: false,
//     image2: false,
//   });

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setImageAnimationStates({ image1: true, image2: true });
//     }, 300);

//     return () => clearTimeout(timer);
//   }, []);

//   const products = [
//     {
//       id: 1,
//       name: "Business Cards",
//       image: "/Assets/Images/Offset1.png",
//       description: "Premium Quality & Professional Design",
//       icon: CreditCard,
//     },
//     {
//       id: 2,
//       name: "Flyers & Banners",
//       image: "/Assets/offers/image2.png",
//       description: "Eye-Catching & High Resolution",
//       icon: FileText,
//     },
//   ];

//   return (
//     <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      
//       {/* Heading */}
//       <div className="text-center max-w-7xl mx-auto mb-12">
//         <h2 className="text-2xl lg:text-4xl font-extrabold mb-2" style={{ color: 'black' }}>
//           Our <span style={{ color: '#A4C32C' }}>Exclusive Offers</span>
//         </h2>
//         <p className="text-gray-600 text-sm sm:text-base">
//           “Special Offers for Our Valued Customers”
//         </p>
//       </div>

//       {/* Cards Showcase */}
//       <div className="max-w-7xl mx-auto flex justify-center gap-8 flex-wrap">

//         {products.map((product, index) => (
//           <div
//             key={product.id}
//             className={`group w-48 sm:w-56 md:w-64 transform transition-all duration-1000 hover:-translate-y-2 ${
//               index === 0
//                 ? imageAnimationStates.image1 ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
//                 : imageAnimationStates.image2 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
//             }`}
//           >
//             <div className="border-2 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300" style={{ borderColor: '#A4C32C' }}>
              
//               {/* Image */}
//               <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   fill
//                   className="object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full font-bold text-xs shadow-lg" style={{ backgroundColor: '#A4C32C', color: '#000' }}>
//                   30% OFF
//                 </div>
//               </div>

//               {/* Card Text */}
//               <div className="p-4 bg-white border-t-2" style={{ borderColor: '#A4C32C' }}>
//                 <h3 className="text-base font-bold leading-tight mb-1" style={{ color: '#A4C32C' }}>{product.name}</h3>
//                 <p className="text-gray-600 text-xs leading-relaxed">{product.description}</p>
//                 <div className="mt-3 pt-3 border-t border-gray-200">
//                   <p className="text-xs font-semibold" style={{ color: '#A4C32C' }}>Limited Offer →</p>
//                 </div>
//               </div>

//             </div>
//           </div>
//         ))}

//       </div>
//     </section>
//   );
// }


"use client"

import { useState, useEffect } from "react"
import { CreditCard, FileText } from "lucide-react"
import Image from "next/image"

export default function OffersSection() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 300)
    return () => clearTimeout(t)
  }, [])

  const products = [
    {
      id: 1,
      name: "Business Cards",
      image: "/Assets/Images/offset1.png",
      description:
        "Premium quality business cards that leave a lasting impression. Glossy or matte finish options available.",
      features: ["1000 Cards", "Full Color Print", "Glossy / Matte", "Custom Designs"],
      icon: CreditCard,
    },
    {
      id: 2,
      name: "Flyers & Banners",
      image: "/Assets/offers/image2.png",
      description:
        "Eye-catching promotional flyers and banners for your events and business campaigns.",
      features: ["Custom Sizes", "High Resolution", "Multiple Templates", "Bulk Discounts"],
      icon: FileText,
    },
  ]

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-14 px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="text-center max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-3">
          Our <span className="text-[#A4C32C]">Exclusive Offers</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
          Discover premium products at unbeatable prices. Limited time offers designed for our valued customers.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">

        {products.map((product, index) => (
          <div
            key={product.id}
            className={`border-2 rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ borderColor: "#A4C32C", transitionDelay: `${index * 120}ms` }}
          >

            {/* IMAGE CARD */}
            <div className="relative w-full h-44 sm:h-48 bg-gray-100 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4"
              />

              {/* Badge */}
              <span
                className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full"
                style={{ backgroundColor: "#A4C32C", color: "#000" }}
              >
                30% OFF
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-5">

              {/* Title */}
              <div className="flex items-center gap-2 mb-2">
                <product.icon size={20} className="text-[#A4C32C]" />
                <h3 className="text-lg font-bold text-[#A4C32C]">
                  {product.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Features */}
              <ul className="grid grid-cols-2 gap-y-2 text-sm">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="mr-2 font-bold text-[#A4C32C]">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        ))}

      </div>
    </section>
  )
}





