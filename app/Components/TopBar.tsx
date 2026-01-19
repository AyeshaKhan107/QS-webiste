"use client";
import { Mail, Phone } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function TopBar() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false); // <-- track hover in a ref
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrame: number;
    let lastTime = performance.now();
    const speed = 40; // pixels per second (adjust)

    const scroll = (time: number) => {
      const delta = (time - lastTime) / 1000; // seconds
      lastTime = time;

      if (!isHoveredRef.current) {
        el.scrollLeft += speed * delta;

        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const contacts = [
    {
      type: "phone",
      value: "+971588094235",
      icon: <Phone className="w-4 h-4" />,
    },
    {
      type: "email",
      value: "qamaradvertising815@gmail.com",
      icon: <Mail className="w-4 h-4" />,
    },
    {
      type: "phone",
      value: "+971563478120",
      icon: <Phone className="w-4 h-4" />,
    },
    {
      type: "email",
      value: "qamaradvertising815@gmail.com",
      icon: <Mail className="w-4 h-4" />,
    },
  ];

  const duplicatedContacts = [...contacts, ...contacts];

  return (
    <div className="overflow-hidden bg-gradient-to-r from-[#A4C32C] via-[#8FB023] to-[#7A9C1A] text-white py-1">
      <div className="flex gap-32 whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {duplicatedContacts.map((item, index) => (
          <a
            key={index}
            href={
              item.type === "email"
                ? `mailto:${item.value}`
                : `tel:${item.value}`
            }
            className="flex items-center gap-2"
          >
            {item.icon}
            <span>{item.value}</span>
            <span className="text-white/70"></span>
          </a>
        ))}
      </div>
    </div>
  );
}
