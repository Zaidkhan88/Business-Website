// app/[product]/page.jsx
import GateValveComp from "@/app/components/GateValveComp.jsx";
import BallValveComp from "@/app/components/BallValveComp.jsx";
import BellowSealValve from "@/app/components/BellowSealValve";
import ButterflyValve from "@/app/components/ButterflyValve";
import CheckValveComp from "@/app/components/CheckValveComp.jsx";
import CryogenicValvesComp from "@/app/components/CryongenicValve";
import DINGlobeValvesComp from "@/app/components/DinGlobeValve";
// import CheckValveComp from "@/app/components/CheckValveComp.jsx";
// import CheckValveComp from "@/app/components/CheckValveComp.jsx";
// import CheckValveComp from "@/app/components/CheckValveComp.jsx";
// import CheckValveComp from "@/app/components/CheckValveComp.jsx";
// import CheckValveComp from "@/app/components/CheckValveComp.jsx";
import DoubleBlockBallValveComp from "@/app/components/DoubleBlockBallValve";
import DualPlateCheckValvesComp from "@/app/components/DualPlateCheckValve";

import ForgedValvesComp from "@/app/components/ForgedValve";
import GlobeValvesPage from "@/app/components/GlobeValveComp";
import PistonValvesPage from "@/app/components/PistonValve";
import StrainerValvesPage from "@/app/components/Strainers";
import ThreeWayValvesPage from "@/app/components/ThreeWayBallValve";

// Map product slugs to components
const productComponents = {
  "gate-valves": GateValveComp,
  "ball-valves": BallValveComp,
  "swing-check-valves": CheckValveComp,
  "bellow-seal-valves":BellowSealValve,
  "butterfly-valves":ButterflyValve,
  "cryogenic-valves":CryogenicValvesComp,
  "din-globe-valves":DINGlobeValvesComp,
  "double-block-ball-valves":DoubleBlockBallValveComp,
  "dual-plate-check-valves":DualPlateCheckValvesComp,
  "forged-valves":ForgedValvesComp,
  "globe-valves":GlobeValvesPage,
  "piston-valves":PistonValvesPage,
  "strainers":StrainerValvesPage,
  "3way-4way-valves":ThreeWayValvesPage
//   "":,
//   "":,

};
export async function generateMetadata({ params }) {
  const { product } = await params; // ✅ no await

  // Ideally fetch product details from your DB or API
  // Example: const product = await getProduct(productSlug);

  return {
    title: `${product.replace(/-/g, " ")} | My Business Website`,
    description: `Learn more about ${product.replace(/-/g, " ")}. Find specifications, features, and details for ${product}.`,
    keywords: `${product}, industrial valves, buy ${product},competitive price, best ${product}`,
    openGraph: {
      title: `${product.replace(/-/g, " ")} | My Business Website`,
      description: `Find details, specifications, and benefits of ${product.replace(/-/g, " ")}.`,
      url: `https://yourdomain.com/products/${product}`,
      siteName: "My Business Website",
      // type: "product",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.replace(/-/g, " ")} | My Business Website`,
      description: `Explore ${product.replace(/-/g, " ")} – full product specifications and features.`,
    },
  };
}
export default async function ProductPage({ params }) {
  const { product } = await params;

  // Find the component based on slug
  const ProductComponent = productComponents[product];

  if (!ProductComponent) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600">404 - Product Not Found</h1>
        <p className="mt-2 text-gray-600">The product <strong>{product}</strong> does not exist.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <ProductComponent />
    </div>
  );
}
