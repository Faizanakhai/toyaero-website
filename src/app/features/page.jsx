"use client";

export default function FeaturesSection() {
  // Toy plane features to be displayed
  const features = [
    {
      title: "Vintage Design",
      description: "Authentic retro aesthetic for display or play.",
    },
    {
      title: "Durable Build",
      description: "Built for kids with high-quality materials.",
    },
    {
      title: "Safe Materials",
      description: "Non-toxic, lightweight, and tested for safety.",
    },
    {
      title: "Interactive Fun",
      description: "Spinning propellers and engaging elements.",
    },
    {
      title: "Educational Value",
      description:
        "Great for learning basic aerodynamics and engineering concepts.",
    },
    {
      title: "Collector Appeal",
      description:
        "Ideal for enthusiasts who appreciate craftsmanship and nostalgia.",
    },
  ];

  return (
    <section id="features" className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            ToyAero Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Discover the craftsmanship and thoughtful engineering behind every
            ToyAero aircraft.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition bg-white"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
