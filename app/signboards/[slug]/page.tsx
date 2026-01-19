import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "../../data/services";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return {
    title: service
      ? `${service.title} | Qamar Advertising`
      : "Signboard | Qamar Advertising",
    description: service?.description,
  };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 w-full h-[100vh]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80">
            Signboards
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            {service.title}
          </h1>
          <p className="text-lg max-w-3xl text-white/90">
            {service.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get a Quote
            </Link>
            <Link
              href="/about"
              className="border border-white text-white px-5 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
            >
              Why Choose Us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What you get
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>✅ Custom design options aligned to your brand</li>
              <li>✅ Durable materials for UAE climate</li>
              <li>✅ LED / illumination options where applicable</li>
              <li>✅ Full installation and government approvals support</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <p className="text-gray-600 mb-4">
              Tell us about your project and we will respond quickly.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary text-black px-5 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
