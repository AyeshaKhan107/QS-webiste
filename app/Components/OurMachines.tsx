// "use client"

// import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// export default function EquipmentShowcase() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isAutoPlay, setIsAutoPlay] = useState(true)

//   const equipment = [
//     {
//       id: 1,
//       name: "HD Printing Machine",
//       image: "/Assets/machines/image3.png",
//       description: "",
    
//     },
//     {
//       id: 2,
//       name: "Acrylic Printing Machine",
//       image: "/Assets/machines/image1.png",
//       description: "",
//     },
//     {
//       id: 3,
//       name: "Vinyl Cutting Machine",
//       image: "/Assets/machines/image2.png",
//       description: "",
//     },
//   ]

//   const features = [
//     {
//       number: "01",
//       title: "Precision Engineering",
//       description: "Engineered for accuracy and consistency in every cut and print",
//     },
//     {
//       number: "02",
//       title: "High Capacity Production",
//       description: "Industrial-grade equipment designed for large-scale operations",
//     },
//   ]

//   // Auto-play carousel
//   useEffect(() => {
//     if (!isAutoPlay) return

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % equipment.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [isAutoPlay, equipment.length])

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % equipment.length)
//     setIsAutoPlay(false)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + equipment.length) % equipment.length)
//     setIsAutoPlay(false)
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Header */}
//       <header className="border-b border-gray-200">
//           <div className="text-center space-y-3">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-relaxed" style={{color: '#A4C32C'}}>
//               Professional <span className="block font-semibold text-base text-gray-700">Equipment Solutions</span>
//             </h1>
            
//           </div>
      
//       </header>

//       {/* Hero Section with Slider */}
//       <section className="relative w-full overflow-hidden py-8 sm:py-10">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Slider Container */}
//           <div className="relative w-full aspect-video overflow-hidden rounded-2xl border shadow-lg" style={{borderColor: '#A4C32C', borderWidth: '2px'}}>
//             {equipment.map((item, index) => (
//               <div
//                 key={item.id}
//                 className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
//               >
//                 <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
//                 {/* Image Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
//                   <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-2" style={{textShadow: '0 3px 6px rgba(0,0,0,0.7)'}}>{item.name}</h2>
//                   <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-lg">{item.description}</p>
//                 </div>
//               </div>
//             ))}

//             {/* Navigation Buttons */}
//             <button
//               onClick={prevSlide}
//               className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-2.5 sm:p-3 rounded-full transition-all hover:scale-110 shadow-lg"
//               style={{backgroundColor: '#A4C32C'}}
//               aria-label="Previous slide"
//             >
//               <ChevronLeft size={20} className="text-black" strokeWidth={2.5} />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-2.5 sm:p-3 rounded-full transition-all hover:scale-110 shadow-lg"
//               style={{backgroundColor: '#A4C32C'}}
//               aria-label="Next slide"
//             >
//               <ChevronRight size={20} className="text-black" strokeWidth={2.5} />
//             </button>

//             {/* Slide Indicators */}
//             <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
//               {equipment.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setCurrentSlide(index)
//                     setIsAutoPlay(false)
//                   }}
//                   className={`rounded-full transition-all duration-300 ${
//                     index === currentSlide ? "w-8 h-2" : "w-2 h-2 hover:opacity-100"
//                   }`}
//                   style={{backgroundColor: index === currentSlide ? '#A4C32C' : 'rgba(255,255,255,0.6)'}}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-16 sm:mb-20">
//             <h2 className="text-1xl sm:text-2xl md:text-4xl font-bold mb-4" style={{color: 'black'}}>
//               Why<span className="text-primary"> Our Equipment </span>Stands Out
//             </h2>
//             <p className="text-gray-600 text-lg max-w-3xl mx-auto">
//               Industry-leading technology combined with expert craftsmanship ensures exceptional quality and consistent results
//             </p>
//           </div>

//           {/* Features Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="group p-8 sm:p-10 border rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
//                 style={{borderColor: '#A4C32C', borderWidth: '2px'}}
//               >
//                 <div className="flex items-start gap-6">
//                   <div className="flex-shrink-0">
//                     <div className=" text-black flex items-center justify-center h-16 w-16 rounded-lg group-hover:shadow-md transition-all" style={{backgroundColor: '#A4C32C'  }}>
//                       <span className="text-2xl sm:text-3xl font-bold text-black">{feature.number}</span>
//                     </div>
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{color: '#A4C32C'}}>{feature.title}</h3>
//                     <p className="text-gray-600 leading-relaxed text-base">{feature.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>


//     </main>
//   )
// }



"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function EquipmentShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const equipment = [
    {
      id: 1,
      name: "HD Printing Machine",
      image: "/Assets/machines/image3.png",
      description: "High-definition printing for crisp and vibrant results."
    },
    {
      id: 2,
      name: "Acrylic Laser Cutting Machine",
      image: "/Assets/machines/image1.png",
      description: "Perfect for acrylic boards, signs and custom designs."
    },
    {
      id: 3,
      name: "Vinyl Printing Machine",
      image: "/Assets/machines/image2.png",
      description: "Precision cutting for vinyl sheets and decals."
    },
  ]

  const features = [
    {
      number: "01",
      title: "Precision Engineering",
      description: "Engineered for accuracy and consistency in every cut and print",
    },
    {
      number: "02",
      title: "High Capacity Production",
      description: "Industrial-grade equipment designed for large-scale operations",
    },
  ]

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % equipment.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, equipment.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % equipment.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + equipment.length) % equipment.length)
    setIsAutoPlay(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="text-center py-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold" style={{color: '#A4C32C'}}>
            Professional
            <span className="block font-semibold text-base text-gray-700">
              Equipment Solutions
            </span>
          </h1>
        </div>
      </header>

      {/* Main Section: Text Left + Carousel Right */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">

          {/* Left Side: Text */}
          <div className="w-full lg:w-1/2 space-y-8">
            {equipment.map((item, index) => (
              <div key={index} className={`transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-50"}`}>
                <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#A4C32C' }}>{item.name}</h2>
                <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Right Side: Carousel */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-video rounded-2xl overflow-hidden border-2 border-[#A4C32C] shadow-lg transform scale-90">
              {equipment.map((item, index) => (
                <div key={item.id} className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
              ))}

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full shadow-lg bg-[#A4C32C] hover:scale-110"
              >
                <ChevronLeft size={20} className="text-black" strokeWidth={2.5} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full shadow-lg bg-[#A4C32C] hover:scale-110"
              >
                <ChevronRight size={20} className="text-black" strokeWidth={2.5} />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {equipment.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => { setCurrentSlide(index); setIsAutoPlay(false) }}
                    className={`rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 h-2" : "w-2 h-2"}`}
                    style={{ backgroundColor: index === currentSlide ? '#A4C32C' : 'rgba(255,255,255,0.6)' }}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-1xl sm:text-2xl md:text-4xl font-bold mb-4" style={{color: 'black'}}>
              Why<span className="text-primary"> Our Equipment </span>Stands Out
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Industry-leading technology combined with expert craftsmanship ensures exceptional quality and consistent results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 sm:p-10 border rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{borderColor: '#A4C32C', borderWidth: '2px'}}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className=" text-black flex items-center justify-center h-16 w-16 rounded-lg group-hover:shadow-md transition-all" style={{backgroundColor: '#A4C32C'  }}>
                      <span className="text-2xl sm:text-3xl font-bold text-black">{feature.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{color: '#A4C32C'}}>{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-base">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
