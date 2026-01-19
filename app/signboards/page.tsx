import Link from "next/link";
import Services from "../Components/Services";

export const metadata = {
  title: "Signboards | Qamar Advertising",
  description: "Indoor, outdoor, LED, 3D, rooftop, digital signboards in Sharjah and UAE",
};

export default function SignboardsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-linear-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Signboards</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Custom indoor, outdoor, LED, 3D, rooftop and digital signboards crafted for durability and impact.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="bg-white text-primary px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get a Quote
            </Link>
            <Link href="/about" className="border border-white text-white px-5 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition">
              Why Choose Us
            </Link>
          </div>
        </div>
      </section>
      <Services />
    </main>
  );
}