"use client";

import { useState } from "react";
import ModelStickyRight from "../components/ModelStickyRight";
import Image from "next/image";
import planeImage from "/public/plane-static.png"; // Static fallback image of the toy plane

export default function Hero() {
  // Toggle to show either static image or interactive 3D model
  const [show3D, setShow3D] = useState(false);

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 py-6 gap-12">
      {/* Model/Image Section (right on desktop, top on mobile) */}
      <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2">
        <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] max-w-md md:max-w-full">
          {show3D ? (
            <ModelStickyRight /> // Renders the interactive 3D model
          ) : (
            <Image
              src={planeImage}
              alt="Toy Plane"
              className="object-contain w-full h-full"
              priority
            />
          )}
        </div>
      </div>

      {/* Text Section (left on desktop, below model on mobile) */}
      <div className="w-full md:w-1/2 max-w-xl space-y-6 text-center md:text-left order-2 md:order-1">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          TOY PLANES <span className="text-blue-600">FOR THE FUTURE</span>
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg px-2 md:px-0">
          Explore our vintage-inspired aircraft with a touch of modern
          engineering. Perfect for all ages.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start w-full px-4 md:px-0">
          <button className="w-full md:w-auto px-8 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition">
            Shop Now
          </button>
          <button
            className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            onClick={() => setShow3D(!show3D)}
          >
            {show3D ? "Hide 3D View" : "Want to see in 3D?"}
          </button>
        </div>
      </div>
    </section>
  );
}
