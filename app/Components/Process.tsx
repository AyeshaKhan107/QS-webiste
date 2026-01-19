import { PenTool, Factory, Wrench } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      title: 'Sign Design',
      description: 'Concept design and visual mockups tailored to your brand.',
      icon: <PenTool className="w-12 h-12 mx-auto text-primary" />
    },
    {
      title: 'Sign Manufacturing',
      description: 'Precision fabrication with premium, long-lasting materials.',
      icon: <Factory className="w-12 h-12 mx-auto text-primary" />
    },
    {
      title: 'Sign Installation',
      description: 'Professional, on-time installation with full safety checks.',
      icon: <Wrench className="w-12 h-12 mx-auto text-primary" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to installation, we handle every step with precision and care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="absolute -top-6 left-8 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                {index + 1}
              </div>
              <div className="text-5xl mb-6 mt-4">{step.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
