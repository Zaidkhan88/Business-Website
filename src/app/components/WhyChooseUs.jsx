import { Globe, Clock, Zap, Layers } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6 text-blue-600" aria-hidden="true" />,
      title: "Industry-Specific Solutions",
      description: "Valves tailored for oil & gas, power plants, and chemical processing industries with custom specifications."
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" aria-hidden="true" />,
      title: "Fast Critical Deliveries",
      description: "Urgent requirements handled with priority dispatch from our extensive ready stock inventory."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" aria-hidden="true" />,
      title: "Pressure & Temperature Rated",
      description: "Products rigorously tested for high-pressure (PN40+) and extreme-temperature industrial applications."
    },
    {
      icon: <Layers className="w-6 h-6 text-blue-600" aria-hidden="true" />,
      title: "Wide Range of Materials",
      description: "Carbon steel, SS304/316, Duplex, and exotic alloys available for corrosive and high-wear environments."
    }
  ];

  return (
    <section 
      className="bg-gray-50 lg:py-12 px-4 sm:py-12 sm:px-6 lg:px-8"
      aria-labelledby="why-choose-us-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with semantic markup */}
        <header className="text-center mb-10">
          <h2 
            id="why-choose-us-heading" 
            className="text-3xl font-bold text-gray-900"
            itemProp="name"
          >
            Engineered for Industrial Reliability
          </h2>
          <p 
            className="mt-3 text-gray-600 max-w-3xl mx-auto"
            itemProp="description"
          >
            Why engineers and procurement teams trust AK Valves for critical applications worldwide
          </p>
        </header>

        {/* Features with schema.org markup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <article 
              key={index}
              className="border border-gray-200 p-5 rounded-lg hover:border-blue-300 transition-colors"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <div className="flex items-start space-x-4">
                <div className="mt-1 flex-shrink-0" itemProp="image">
                  {feature.icon}
                </div>
                <div>
                  <h3 
                    className="text-lg font-semibold text-gray-900"
                    itemProp="name"
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="mt-1 text-gray-600 text-sm"
                    itemProp="description"
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
              <meta itemProp="position" content={`${index + 1}`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

        {/* Technical CTA (uncomment when needed) */}
        {/*
        <div className="mt-12 text-center border-t border-gray-200 pt-10">
          <h3 className="text-xl font-medium text-gray-900">
            Need Technical Specifications?
          </h3>
          <p className="mt-2 text-gray-600">
            Download datasheets or consult our engineers for valve selection.
          </p>
          <div className="mt-5 flex justify-center gap-4">
            <Link
              href="/catalogue"
              className="inline-flex items-center px-5 py-2 border border-blue-600 text-sm font-medium rounded-md text-blue-600 hover:bg-blue-50"
              aria-label="View our product catalogue"
            >
              View Catalogue
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              aria-label="Contact our engineering team"
            >
              Talk to an Engineer
            </Link>
          </div>
        </div>
        */}
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;