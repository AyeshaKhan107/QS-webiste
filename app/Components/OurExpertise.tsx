"use client";

import { FiStar, FiLayers, FiCheckSquare } from 'react-icons/fi';

export default function OurExpertise() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Our <span className="text-[#f7931e]">Expertise</span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600">
          We combine creativity, precision and technical know-how to deliver
          standout signage and branding solutions that work for your business.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary text-white rounded-lg inline-flex">
                <FiStar size={20} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Signage Excellence</h3>
            </div>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              High-impact indoor and outdoor signboards engineered for durability,
              visibility and brand consistency.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><FiCheckSquare className="text-green-500 mt-0.5" /> Custom fabrication</li>
              <li className="flex items-start gap-2"><FiCheckSquare className="text-green-500 mt-0.5" /> Weatherproof materials</li>
              <li className="flex items-start gap-2"><FiCheckSquare className="text-green-500 mt-0.5" /> LED & illumination options</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary text-white rounded-lg inline-flex">
                <FiLayers size={20} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Creative Branding</h3>
            </div>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Brand-first design, vinyl, wraps and digital graphics to strengthen
              your identity across touchpoints.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><FiCheckSquare className="text-green-500 mt-0.5" /> Logo & identity
              </li>
              <li className="flex items-start gap-2"><FiCheckSquare className="text-green-500 mt-0.5" /> Vehicle & fleet graphics</li>
              <li className="flex items-start gap-2"><FiCheckSquare className="text-green-500 mt-0.5" /> Visual merchandising</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary text-white rounded-lg inline-flex">
                <FiCheckSquare size={20} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Professional Execution</h3>
            </div>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              From planning and approvals to installation and maintenance —
              projects delivered on time and to spec.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><FiCheckSquare className="text-green-500 mt-0.5" /> Site surveys & permits</li>
              <li className="flex items-start gap-2"><FiCheckSquare className="text-green-500 mt-0.5" /> Skilled installation teams</li>
              <li className="flex items-start gap-2"><FiCheckSquare className="text-green-500 mt-0.5" /> Aftercare & support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
