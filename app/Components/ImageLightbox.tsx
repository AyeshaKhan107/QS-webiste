"use client";

import Image from "next/image";

type ImageLightboxProps = {
  src: string | null;
  alt?: string;
  onClose: () => void;
};

export default function ImageLightbox({
  src,
  alt = "Fullscreen image",
  onClose,
}: ImageLightboxProps) {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Stop closing when clicking image */}
      <div
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-3xl font-bold"
          aria-label="Close"
        >
          ✕
        </button>

        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          className="object-contain w-auto h-auto max-w-full max-h-[90vh] rounded-lg"
          priority
        />
      </div>
    </div>
  );
}
