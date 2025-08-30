"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// export const metadata = {
//   title: "Ball Valves | AK Valves",
//   description:
//     "Fire-safe and Cryogenic Tested Ball Valves (Soft Seated & Metal to Metal Seated). Certified to API 607, API 6FA, BS 6364. Available in 3-way, 4-way, floating, and trunnion mounted designs.",
//   keywords:
//     "ball valve, fire safe ball valve, cryogenic ball valve, API 607, API 6FA, soft seated ball valve, metal seated ball valve, 3 way ball valve, 4 way ball valve",
// };

export default function CryogenicValvesComp() {
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
    <main className="flex max-w-7xl mx-auto px-6 py-12 gap-8">
      {/* Left content */}
      <section className="flex-1">
        {/* Product Image */}
        <div className="mb-6">
          <Image
            src="/images/cryogenic-valve-1.png"
            alt="Cryogenic Valve"
            width={400}
            height={400}
            className="rounded shadow object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">CRYOGENIC ( GATE / GLOBE ) VALVES</h1>

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


            <li>Size: 1/2″ – 24″ (15NB – 600NB)</li>
            <li>Class: 150#-1500#</li>
            <li>
             LTS / SS / DSS


            </li>
            <li>Forged / cast steel valves</li>
            <li>
              Low Emission
            </li>
            <li>Actuation : Hand wheel, Gear box, Electrical & Pneumatic actuators

</li>
            <li>Specialty : -46oC to -198oC</li>
            <li>Cold & Non Cold Application</li>
            

          </ul>
        )}

        {/* Specifications Tab */}
        {activeTab === "specs" && (
          <div className="overflow-x-auto">
            <ul className="list-disc pl-6 space-y-2 ">
              <li>
                <b>Design : </b>ASME B16.34 / BS 5352 / API 600 / BS 1873 / API 602
              </li>
              <li>
                <b>Face to Face : </b>ASME B16.10 / API 6D
              </li>
              <li>
                <b>End to End : </b>SW / BW Type / Flanged End / RTJ
              </li>
              <li>
                <b>BW End :</b> ASME B16.25
              </li>
              <li>
                <b>Test : </b>API 598 / BS 6755.
              </li>
              <li>
                <b>Fire Safe Test : </b> API 607 / API 607 / API 6FA.
              </li>
              <li>
                <b>Special: </b>API NACE MR-01-75
              </li>
              <li>
                Extend Stem
              </li>
              
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
            href="/brochures/ball-valve.pdf"
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg shadow hover:bg-gray-300"
          >
            Download Brochure
          </Link>
        </div>

        {/* CTA Bottom */}
        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Request a Quote
          </Link>
          <p className="mt-3 text-gray-600">
            Brochure coming soon – will be available for download.
          </p>
        </div>
      </section>

      {/* Right Sidebar */}
       <aside className="  rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Other Valves</h3>
          <nav className="space-y-2">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className={`block px-4 py-2 rounded-md font-medium ${
                  cat.name === "Cryogenic Valves"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </nav>
        </aside>
    </main>
  );
}
