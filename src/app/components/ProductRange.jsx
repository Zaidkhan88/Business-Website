// app/components/ProductRange.jsx
import Image from 'next/image';


// Server-rendered product card (no interactivity)
const ProductCard = ({ product }) => (
  <article className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
    <div className="bg-gray-50 p-4 h-48 flex items-center justify-center">
      <Image
        src={product.image}
        alt={`${product.name} industrial valve - ${product.description}`}
        width={280}
        height={200}
        className="h-full object-contain"
        priority={false}
      />
    </div>
    
    <div className="p-5">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {product.name}
      </h3>
      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
      
      <dl className="space-y-3 mb-5">
        {product.specs.map((spec) => (
          <div key={spec.label} className="flex text-sm">
            <dt className="text-gray-500 font-medium w-32 flex-shrink-0">
              {spec.label}:
            </dt>
            <dd className="text-gray-700">{spec.value}</dd>
          </div>
        ))}
      </dl>
      
      <div className="pt-4 border-t border-gray-100">
        <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">
          Typical Applications
        </h4>
        <ul className="flex flex-wrap gap-2">
          {product.applications.map((app) => (
            <li key={app} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {app}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </article>
);

// Client component ONLY for interactive filters
import FilterControls from './FilterControls';

// Main server component
export default async function ProductRange() {
  // In a real app, you might fetch this from CMS/API
  const products =[
  {
    name: "Gate Valves",
    image: "/images/gatevalve.png",
    description: "Full-bore isolation valves for high-pressure applications",
    specs: [
      { label: "Size Range", value: "½\" to 24\"" },
      { label: "Pressure Rating", value: "PN16 to PN64" },
      { label: "Materials", value: "CS, SS304, SS316, Duplex" },
      { label: "Standards", value: "API 600, ASME B16.34" }
    ],
    applications: ["Oil & Gas Pipelines", "Power Plants", "Water Treatment"]
  },
  {
    name: "Ball Valves",
    image: "/images/ballvalve.png",
    description: "Quarter-turn valves for quick shut-off with low torque",
    specs: [
      { label: "Size Range", value: "½\" to 16\"" },
      { label: "Pressure Rating", value: "Class 150 to 900" },
      { label: "End Connections", value: "Flanged, Threaded, Socket Weld" },
      { label: "Operation", value: "Lever, Gear, Actuated" }
    ],
    applications: ["Process Industries", "Cryogenic Services", "Fuel Handling"]
  },
  {
    name: "Globe Valves",
    image: "/images/globevalve.png",
    description: "Linear motion valves for precise throttling and flow control",
    specs: [
      { label: "Size Range", value: "½\" to 12\"" },
      { label: "Pressure Rating", value: "PN10 to PN160" },
      { label: "Bonnet Type", value: "Bolted, Pressure Seal" },
      { label: "Standards", value: "BS 1873, API 623" }
    ],
    applications: ["Steam Systems", "Chemical Processing", "Water Distribution"]
  },
  {
    name: "Butterfly Valves",
    image: "/images/butterflyvalve.png",
    description: "Compact and lightweight valves for on-off and modulating services",
    specs: [
      { label: "Size Range", value: "2\" to 72\"" },
      { label: "Pressure Rating", value: "PN6 to PN25" },
      { label: "Disc Material", value: "Ductile Iron, SS316, Aluminum Bronze" },
      { label: "Operation", value: "Manual, Pneumatic, Electric" }
    ],
    applications: ["HVAC Systems", "Fire Protection", "Water Supply"]
  },
  {
    name: "Check Valves",
    image: "/images/checkvalve.png",
    description: "Non-return valves for preventing backflow in pipelines",
    specs: [
      { label: "Size Range", value: "½\" to 24\"" },
      { label: "Pressure Rating", value: "Class 150 to 600" },
      { label: "Types", value: "Swing, Lift, Dual Plate" },
      { label: "Standards", value: "API 6D, ASME B16.34" }
    ],
    applications: ["Pumping Stations", "Petrochemical Plants", "Refineries"]
  },
  {
    name: "Pressure Relief Valves",
    image: "/images/safetyvalve.png",
    description: "Safety valves designed to release excess pressure from systems",
    specs: [
      { label: "Set Pressure", value: "10 psi to 6000 psi" },
      { label: "Connection Types", value: "Threaded, Flanged" },
      { label: "Material", value: "SS316, Monel, Bronze" },
      { label: "Standards", value: "ASME Section VIII, API 526" }
    ],
    applications: ["Boilers", "Compressors", "Storage Tanks"]
  }
]; // Your existing product data
  
  const filters = [
    { name: "Size Range", icon: "📏" }, // Using emoji instead of client-side icon
    { name: "Pressure Rating", icon: "🪫" },
    { name: "Material", icon: "🔩" },
    { name: "End Connection", icon: "🔌" }
  ];

  return (
    <section 
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      itemScope
      itemType="https://schema.org/ProductCollection"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Industrial Valve Specifications
          </h1>
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
            Standard and custom valves meeting API, ASME, and ISO standards
          </p>
        </header>

        {/* Client-side interactive part */}
        <FilterControls filters={filters} />

        {/* Server-rendered product grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {products.map((product) => (
            <ProductCard 
              key={product.name} 
              product={product} 
              itemProp="itemListElement"
              itemType="https://schema.org/Product"
            />
          ))}
        </div>
      </div>
    </section>
  );
}