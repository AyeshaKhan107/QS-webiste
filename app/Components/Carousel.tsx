// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import Image from "next/image";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const slides = [
//   {
//     src: "/Assets/hero/slide1 new.png",
//     alt: "Slide 1",
//     className: "object-contain w-full h-full",
//   },
//   {
//     src: "/Assets/hero/slide2.png",
//     alt: "Slide 2",
//     className: "object-contain w-full h-full",
//   },
//   {
//     src: "/Assets/hero/slide3.png",
//     alt: "Slide 3",
//     className: "object-contain w-full h-full",
//   },
//   // 👉 just add more images here
// ];

// export default function Carousel() {
//   return (
//     <Swiper
//       modules={[Autoplay, Pagination, Navigation]}
//       autoplay={{
//         delay: 3000,
//         disableOnInteraction: false,
//       }}
//       pagination={{ clickable: true }}
//       navigation
//       className="mySwiper"
//     >
//       {slides.map((slide, index) => (
//         <SwiperSlide key={index}>
//           <div className="slide">
//             <Image
//               src={slide.src}
//               alt={slide.alt}
//               fill
//               sizes="100vw"
//               priority={index === 0}
//               style={{ objectFit: "cover" }}
//             />
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  { src: "/Assets/hero/slide1 new.png", alt: "Slide 1" },
  { src: "/Assets/hero/slide2.png", alt: "Slide 2" },
  { src: "/Assets/hero/slide3.png", alt: "Slide 3" },
];

export default function Carousel() {
  return (
    <div className="w-full h-[100vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                priority={index === 0}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

