"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// export const metadata = {
//   title: "Gate Valves | AK Valves - Manufacturer & Supplier",
//   description:
//     "High-quality Gate Valves by AK Valves. Available in Classes 150, 300, 600, 900 with bolted bonnet & pressure seal bonnet. Request a quote today.",
//   keywords:
//     "gate valve, gate valves supplier, industrial gate valves, class 150 valve, class 300 valve, class 600 valve, cast steel valve, AK Valves India",
// };

export default function GateValvesPage() {
  const [activeTab, setActiveTab] = useState("features");

   const categories = [
   { name: "Ball Valves", href: "/products/ball-valves" },
    { name: "Gate Valves", href: "/products/gate-valves" },
    { name: "Globe Valves", href: "/products/globe-valves" },
    { name: "Swing Check Valves", href: "/products/swing-check-valves" },
    { name: "Butterfly Valves", href: "/products/butterfly-valves" },
    { name: "Dual Plate Check Valves", href: "/products/dual-plate-check-valves" },
    { name: "Double Block & Bleed Ball Valves", href: "/products/double-block-ball-valves" },
    { name: "Cryogenic Valves", href: "/products/cryogenic-valves" },
    { name: "Bellow Seal Valves", href: "/products/bellow-seal-valves" },
    { name: "3 way & 4 way Valves", href: "/products/3way-4way-valves" },
    { name: "Strainers", href: "/products/strainers" },
    { name: "Forged Valves", href: "/products/forged-valves" },
    { name: "Piston Valves", href: "/products/piston-valves" },
    { name: "DIN Globe Valves", href: "/products/din-globe-valves" },
  ];

  return (
    <main className="px-6 py-10 max-w-7xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
        Gate Valves
      </h1>
      <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
        AK Valves manufactures and supplies durable <strong>Gate Valves</strong>{" "}
        designed for reliable shut-off and flow control. Available with{" "}
        <em>Bolted Bonnet & Pressure Seal Bonnet</em> in multiple classes and
        materials.
      </p>

      {/* Layout: Product Content + Sidebar */}
      <section className="grid md:grid-cols-3 gap-10">
        {/* Left + Middle: Image + Details */}
        <div className="md:col-span-2 space-y-8">
          {/* Layout: Image + Tabs */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Product Image */}
            <div className="flex justify-center">
              <Image
                src="/images/gate-valve-1.png" // replace with your actual image
                alt="Industrial Gate Valve"
                width={400}
                height={500}
                className="rounded-lg shadow-lg border"
              />
            </div>

            {/* Tabs + Content */}
            <div>
              {/* Tabs */}
              <div className="flex space-x-4 mb-6">
                <button
                  onClick={() => setActiveTab("features")}
                  className={`px-5 py-2 rounded-lg font-medium ${
                    activeTab === "features"
                      ? "bg-blue-600 text-white shadow"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => setActiveTab("specs")}
                  className={`px-5 py-2 rounded-lg font-medium ${
                    activeTab === "specs"
                      ? "bg-blue-600 text-white shadow"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Specifications
                </button>
              </div>

              {/* Features Tab */}
              {activeTab === "features" && (
                <ul className="list-disc pl-6 space-y-2 ">
                  <li>Size: 1/2″ – 36″ (15NB – 900NB)</li>
                  <li>Class: 150#-2500#</li>
                  <li>CS / SS /Alloys / Monel / Hastalloys / Fabricated / Bronze MOC</li>
                  <li>Solid / Flexible Wedge / Parallel / Double Disc</li>
                  <li>Stem Protector, Linkage, Chain Pulley and Bypass arrangement on request</li>
                  <li>Specially: Bellow Sealed, Cryogenic and High Temp</li>
                  <li>Manual operated / Gear box / Electrical, Pneumatic operated</li>
                  <li>Metal to Metal and Metal to soft Seat</li>
                </ul>
              )}

              {/* Specifications Tab */}
              {activeTab === "specs" && (
                <div className="overflow-x-auto">
                  <ul className="list-disc pl-6 space-y-2 ">
                    <li><b>Design : </b>ASME B16.34 / API 600 / API 602 / API 603 / IS 14846</li>
                    <li><b>Face to Face : </b>ASME B16.10 / DIN</li>
                    <li><b>End to End : </b>SW/BW Type / Flanged End / RTJ</li>
                    <li><b>Pressure -Temperature Rating :</b>ASTM B 16.34</li>
                    <li><b>Screwed End Dimension : </b>ASTM B 1.20.1</li>
                    <li><b>BW End : </b>ASME B16.25</li>
                    <li><b>Test : </b>API 598</li>
                    <li><b>Fire Safe : </b>NACE MR-01-75</li>
                    <li><b>Special : </b> ASME B16.5 / B16.47/DIN / BS / IS / JIS</li>

             
          </ul>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="mt-8 flex space-x-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/brochures/gate-valve.pdf"
                  className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg shadow hover:bg-gray-300"
                >
                  Download Brochure
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Product Categories */}
        <aside className="bg-gray-50 border rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Other Valves</h3>
          <nav className="space-y-2">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className={`block px-4 py-2 rounded-md font-medium ${
                  cat.name === "Gate Valves"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </nav>
        </aside>
      </section>
    </main>
  );
}










// 'use client'
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// // export const metadata = {
// //   title: "Gate Valves | AK Valves - Manufacturer & Supplier",
// //   description:
// //     "High-quality Gate Valves by AK Valves. Available in Classes 150, 300, 600, 900 with bolted bonnet & pressure seal bonnet. Request a quote today.",
// //   keywords:
// //     "gate valve, gate valves supplier, industrial gate valves, class 150 valve, class 300 valve, class 600 valve, cast steel valve, AK Valves India",
// // };

// export default function GateValvesPage() {
//   const [activeTab, setActiveTab] = useState("features");

//   return (
//     <main className="px-6 py-10 max-w-7xl mx-auto">
//       {/* Title */}
//       <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
//         Gate Valves
//       </h1>
//       <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
//         AK Valves manufactures and supplies durable <strong>Gate Valves</strong>{" "}
//         designed for reliable shut-off and flow control. Available with{" "}
//         <em>Bolted Bonnet & Pressure Seal Bonnet</em> in multiple classes and
//         materials.
//       </p>

//       {/* Layout: Image + Details */}
//       <section className="grid md:grid-cols-2 gap-10 items-start">
//         {/* Left: Product Image */}
//         <div className="flex justify-center">
//           <Image
//             src="/images/gate-valve.jpg" // replace with your actual image
//             alt="Industrial Gate Valve"
//             width={400}
//             height={500}
//             className="rounded-lg shadow-lg border"
//           />
//         </div>

//         {/* Right: Tabs + Content */}
//         <div>
//           {/* Tabs */}
//           <div className="flex space-x-4 mb-6">
//             <button
//               onClick={() => setActiveTab("features")}
//               className={`px-5 py-2 rounded-lg font-medium ${
//                 activeTab === "features"
//                   ? "bg-blue-600 text-white shadow"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               Features
//             </button>
//             <button
//               onClick={() => setActiveTab("specs")}
//               className={`px-5 py-2 rounded-lg font-medium ${
//                 activeTab === "specs"
//                   ? "bg-blue-600 text-white shadow"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               Specifications
//             </button>
//           </div>

//           {/* Features Tab */}
//           {activeTab === "features" && (
//             <ul className="list-disc pl-6 space-y-2 ">
//               <li>Size: 1/2″ – 36″ (15NB – 900NB)</li>
//               <li>Class: 150#-2500#</li>
//               <li>CS / SS /Alloys / Monel / Hastalloys / Fabricated / Bronze MOC</li>
//               <li>Solid / Flexible Wedge / Parallel / Double Disc</li>
//               <li>Stem Protector, Linkage, Chain Pulley and Bypass arrangement on request</li>
//               <li>Specially: Bellow Sealed, Cryogenic and High Temp</li>
//               <li>Manual operated / Gear box / Electrical, Pneumatic operated</li>
//               <li>Metal to Metal and Metal to soft Seat</li>
             






//             </ul>
//           )}

//           {/* Specifications Tab */}
//           {activeTab === "specs" && (
//             <div className="overflow-x-auto">
//               <li><b>Design : </b>ASME B16.34 / API 600 / API 602 / API 603 / IS 14846</li>
//               <li><b>Face to Face : </b>ASME B16.10 / DIN</li>
//               <li><b>End to End : </b>SW/BW Type / Flanged End / RTJ</li>
//               <li><b>Pressure -Temperature Rating :</b>ASTM B 16.34</li>
//               <li><b>Screwed End Dimension : </b>ASTM B 1.20.1</li>
//               <li><b>BW End : </b>ASME B16.25</li>
//               <li><b>Test : </b>API 598</li>
//               <li><b>Fire Safe : </b>NACE MR-01-75</li>
//               <li><b>Special : </b> ASME B16.5 / B16.47/DIN / BS / IS / JIS</li>








//             </div>
//           )}

//           {/* CTA Buttons */}
//           <div className="mt-8 flex space-x-4">
//             <Link
//               href="/contact"
//               className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
//             >
//               Request a Quote
//             </Link>
//             <Link
//               href="/brochures/gate-valve.pdf"
//               className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg shadow hover:bg-gray-300"
//             >
//               Download Brochure
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
