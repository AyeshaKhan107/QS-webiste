import { Award, Users, Clock } from 'lucide-react';

export default function WhyChoose() {
  const reasons = [
    {
      title: '1000+ Custom Signboards Delivered',
      icon: Award
    },
    {
      title: 'Trusted by Happy Clients',
      icon: Users
    },
    {
      title: '10+ Years of Expert Craftsmanship',
      icon: Clock
    }
  ];

  return (
    <section className="py-20 bg-linear-to-r from-primary to-primary/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Qamar Advertising?
          </h2>
           <p className="text-xl max-w-6xl mx-auto">
            At Qamar Advertising, we transform storefronts into unforgettable landmarks. Combining
            award-winning design, premium materials, and precise installation, we deliver signage
            solutions that capture attention and drive customers through your doors. From concept
            to completion, our team provides transparent pricing, fast turnaround, and dependable
            support so your brand always looks its best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isMiddle = index === 1;

            return (
              <div
                key={index}
                className={`rounded-lg p-8 text-center transition ${
                  isMiddle
                    ? 'bg-white text-primary shadow-xl scale-105'
                    : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                }`}
              >
                <Icon
                  className={`w-12 h-12 mx-auto mb-4 ${
                    isMiddle ? 'text-primary' : 'text-white'
                  }`}
                />
                <h3 className="text-xl font-semibold">{reason.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
