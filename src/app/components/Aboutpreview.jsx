import Link from 'next/link';
import { Check, Factory, Globe, Shield } from 'lucide-react';

export const metadata = {
  title: 'About AK Valves | Trusted Industrial Valve Supplier Since 2005',
  description: 'AK Valves supplies premium industrial valves to oil & gas, power plants, and chemical industries across India. 10,000+ valves supplied to 200+ clients nationwide.',
  keywords: [
    'industrial valves',
    'valve supplier India',
    'ball valves',
    'gate valves',
    'butterfly valves',
    'Mumbai valve company'
  ],
};

const AboutPreview = () => {
  const industries = ['Oil & Gas', 'Power Plants', 'Water Treatment', 'Chemicals', 'Pharma', 'Marine'];
  const stats = [
    { icon: Check, value: '10,000+', label: 'Valves Supplied', color: 'text-green-600' },
    { icon: Globe, value: '200+', label: 'Clients Nationwide', color: 'text-blue-600' },
    { icon: Factory, value: '15+', label: 'Partner Brands', color: 'text-orange-600' },
    { icon: Shield, value: 'ISO 9001', label: 'Certified', color: 'text-purple-600' },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted Valve Solutions Since <span className="text-blue-600">2005</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AK Valves supplies premium industrial valves to oil & gas, power plants, and chemical industries across India.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Based in Mumbai, we specialize in <strong>Ball Valves</strong>, <strong>Gate Valves</strong>, 
                and <strong>Butterfly Valves</strong> from top manufacturers like L&T, Audco, and BDK.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <stat.icon className={`mt-1 ${stat.color} flex-shrink-0`} />
                    <div>
                      <h2 className="font-semibold text-black">{stat.value}</h2>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Our Valves Power Industries Like:</h2>
            <div className="grid grid-cols-3 gap-4">
              {industries.map((industry) => (
                <div key={industry} className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">{industry}</span>
                </div>
              ))}
            </div>
            <Link 
              href="/about" 
              className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Our Full Story →
            </Link>
          </div>
        </div>

        {/* Uncomment when you have actual logos */}
        {/* <div className="mt-16">
          <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
            Trusted by industry leaders
          </h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {['L&T', 'Audco', 'BDK', 'Spirax', 'AIL'].map((brand) => (
              <div key={brand} className="h-12 flex items-center">
                <Image 
                  src={`/logos/${brand.toLowerCase()}-logo.png`} 
                  alt={`${brand} logo`}
                  width={100}
                  height={48}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutPreview;