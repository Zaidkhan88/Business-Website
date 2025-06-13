'use client';

import React from "react";
import { MotionDiv, MotionArticle, MotionH2 } from '../components/MotionDiv';

const VisionMissionSection = () => {
  // Animation variants (kept as client-side enhancement)
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section 
      className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 md:px-16"
      aria-labelledby="vision-mission-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Semantic heading with structured content */}
        <MotionH2
          id="vision-mission-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }} // Earlier trigger
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800"
        >
          Our <span className="text-blue-600">Vision</span> & <span className="text-green-600">Mission</span>
        </MotionH2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Vision Card - Structured with microdata */}
          <MotionArticle 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-shadow duration-300"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600" itemProp="slogan">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed" itemProp="description">
              To pioneer the future of fluid control systems as the most trusted valve manufacturer worldwide. 
              We envision a world where our innovative solutions set industry benchmarks, where quality 
              transcends expectations, and where every partnership flourishes through transparency and 
              mutual growth. Our global aspirations are matched only by our commitment to engineering 
              excellence that stands the test of time.
            </p>
          </MotionArticle>

          {/* Mission Card - Structured with microdata */}
          <MotionArticle 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{...fadeIn, transition: {delay: 0.2}}}
            className="bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-shadow duration-300"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-600" itemProp="slogan">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed" itemProp="description">
              We are committed to revolutionizing industrial fluid management through precision-engineered 
              valve solutions that exceed the most demanding operational requirements. By combining 
              cutting-edge technology with uncompromising quality standards, we deliver products that 
              ensure safety, efficiency, and reliability. Our customer-centric approach fosters enduring 
              relationships built on trust, timely delivery, and continuous innovation—because your 
              success is the true measure of our excellence.
            </p>
          </MotionArticle>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;




// import React from "react";

// const VisionMissionSection = () => {
//   return (
//     <section className="bg-gray-100 py-12 px-6 md:px-16">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
//           Our Vision & Mission
//         </h2>

//         <div className="grid md:grid-cols-2 gap-10">
//           {/* Vision */}
//           <div className="bg-white shadow-lg rounded-2xl p-6">
//             <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Vision</h3>
//             <p className="text-gray-700 text-lg">
//               To be recognized as a Trusted National Leader in the Valve Manufacturing
//               Industry, known for our uncompromising quality, transparent practices,
//               and strong customer relationships — with the long-term vision to reach
//               global markets.
//             </p>
//           </div>

//           {/* Mission */}
//           <div className="bg-white shadow-lg rounded-2xl p-6">
//             <h3 className="text-2xl font-semibold text-green-600 mb-4">Our Mission</h3>
//             <p className="text-gray-700 text-lg">
//               Our mission is to manufacture and supply high-quality valves that meet the
//               highest Industry standards, backed by precision engineering, ethical
//               practices, and timely delivery. We aim to build long-lasting partnerships
//               through customer satisfaction, continuous innovation, and a commitment to
//               excellence in every product we create.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VisionMissionSection;
