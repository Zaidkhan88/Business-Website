import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Ball Valves",
    href: "/products/ball-valves",
    img: "/images/ballvalve.png",
  },
  {
    name: "Gate Valves",
    href: "/products/gate-valves",
    img: "/images/gatevalve.png",
  },
  {
    name: "Globe Valves",
    href: "/products/globe-valves",
    img: "/images/globevalve.png",
  },
  {
    name: "Swing Check Valves",
    href: "/products/swing-check-valves",
    img: "/images/checkvalve.png",
  },
  {
    name: "Butterfly Valves",
    href: "/products/butterfly-valves",
    img: "/images/butterflyvalve.png",
  },
  {
    name: "Dual Plate Check Valves",
    href: "/products/dual-plate-check-valves",
    img: "/images/dualplatecheckvalve.png",
  },
  {
    name: "Cryogenic Valves",
    href: "/products/cryogenic-valves",
    img: "/images/cryogenicvalve.png",
  },
  {
    name: "Bellow Seal Valves",
    href: "/products/bellow-seal-valves",
    img: "/images/bellowsealvalve.png",
  },
  {
    name: "3 Way & 4 Way Valves",
    href: "/products/3way-4way-valves",
    img: "/images/threewayvalve.png",
  },
  {
    name: "Strainers",
    href: "/products/strainers",
    img: "/images/strainers.png",
  },
];

export const metadata = {
  title: "Our Products | AK Valves",
  description:
    "Explore a wide range of industrial valves including Ball Valves, Gate Valves, Globe Valves, Check Valves, Butterfly Valves, Strainers and more.",
  keywords:
    "ball valve, gate valve, globe valve, check valve, butterfly valve, strainer, industrial valves, AK Valves India",
};

export default function ProductsPage() {
  return (
    <main className="px-6 py-12 max-w-7xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Our Products
      </h1>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            key={product.name}
            href={product.href}
            className="group block bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full h-56">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Title */}
            <div className="p-4 border-t text-center">
              <h2 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600">
                {product.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
