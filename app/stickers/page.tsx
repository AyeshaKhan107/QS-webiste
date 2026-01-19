import Link from "next/link";
import Image from "next/image";

const stickerServices = [
  {
    title: "Sticker Branding",
    description: "Transform your van into a mobile advertisement with high-visibility branding.",
  },
  {
    title: "Vehicle Branding",
    description: "Eye-catching car wraps and decals that turn every trip into a promotion.",
  },
  {
    title: "Vehicle full wrapping",
    description: "Large-format prints for interiors, storefronts, and glass partitions.",
  },
  {
    title: "Vehicle PPF",
    description: "Durable stickers for safety markings, floor arrows, and navigation.",
  },
  {
    title: "Onevision Stickers",
    description: "Large-format prints for interiors, storefronts, and glass partitions.",
  },
  {
    title: "Forosted cutting Stickers",
    description: "Durable stickers for safety markings, floor arrows, and navigation.",
  },
];

export const metadata = {
  title: "Stickers | Qamar Advertising",
  description: "Vehicle wraps, wall graphics, safety stickers and more in Sharjah and UAE",
};

export default function StickersPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-linear-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Stickers & Vehicle Branding</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Custom vehicle wraps, decals, wall graphics, and safety stickers produced with durable materials and vivid prints.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="bg-white text-primary px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Request a Callback
            </Link>
            <Link href="/about" className="border border-white text-white px-5 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stickerServices.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
