"use client";

import Image from "next/image";
import planeImage from "/public/plane-static.png"; // Static product image

export default function Purchase() {
  return (
    <section className="w-full min-h-screen bg-white px-4 md:px-8 py-16">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Product Image */}
        <div className="w-full h-[250px] sm:h-[300px] md:h-[400px]">
          <Image
            src={planeImage}
            alt="ToyAero Plane"
            className="object-contain w-full h-full"
            priority
          />
        </div>

        {/* Right: Purchase Details */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Purchase the <span className="text-blue-600">ToyAero</span>
          </h1>

          <p className="text-gray-700 text-base">
            Own a timeless piece of engineering. The ToyAero is crafted with
            premium, child-safe materials and delivers an unmatched play and
            display experience. Vintage vibes meet modern quality.
          </p>

          <ul className="list-disc list-inside text-gray-600 text-sm">
            <li>Durable & child-friendly build</li>
            <li>Rotating propeller</li>
            <li>Educational & collectible</li>
            <li>Perfect gift for all ages</li>
          </ul>

          {/* Price */}
          <div className="text-2xl font-semibold text-blue-600">₹999</div>

          {/* CTA Button */}
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition w-full md:w-auto">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
