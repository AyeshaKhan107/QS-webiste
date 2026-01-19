import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';

export default function Services() {
  return (
    <section className="py-16 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive signage solutions tailored to elevate your brand and business visibility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Shine effect overlay */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/20 to-transparent z-10 pointer-events-none" />
              
              {/* Image */}
              <div
                className="h-72 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent group-hover:from-black/90 group-hover:via-black/70 transition-all duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                  {service.title}
                </h3>
                <p className="text-white/90 mb-4 line-clamp-2 text-sm transform transition-all duration-300 group-hover:text-white">
                  {service.description}
                </p>
                <Link
                  href={`/signboards/${service.slug}`}
                  className="inline-flex items-center self-start bg-linear-to-r from-primary to-white/30 text-white font-semibold px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group/btn"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
              
              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}