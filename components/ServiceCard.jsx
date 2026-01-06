// components/ServiceCard.jsx
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function ServiceCard({ service, reverse }) {
  const Icon = service.icon;

  return (
    <section
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Text */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg bg-orange-500/10 text-orange-500">
            <Icon size={26} />
          </div>
          <h3 className="text-3xl font-bold">
            {service.title}
          </h3>
        </div>

        <p className="text-gray-600 max-w-xl">
          {service.description}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {service.points.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2"
            >
              <FaCheckCircle className="text-orange-500" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
