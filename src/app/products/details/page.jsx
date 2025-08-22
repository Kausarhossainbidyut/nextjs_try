"use client";

import Image from "next/image";
import { FaStar, FaShippingFast, FaLock } from "react-icons/fa";

export default function ProductPage() {
  return (
    <section className="bg-gray-50 py-10 sm:py-14 lg:py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Left - Product Image */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md relative">
            <Image
              src="/product1.jpg"
              alt="Product Image"
              width={500}
              height={500}
              className="rounded-xl shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right - Product Details */}
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Product One
          </h1>
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-gray-300" />
            <span className="text-gray-600 text-sm">(120 Reviews)</span>
          </div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            This amazing product offers high quality, durability, and style. Perfect choice for your daily needs.
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-blue-600">$49.99</p>

          {/* Features */}
          <div className="flex gap-4 mt-2">
            <div className="flex items-center gap-1 text-gray-700 text-sm">
              <FaShippingFast className="text-blue-500"/>
              Free Shipping
            </div>
            <div className="flex items-center gap-1 text-gray-700 text-sm">
              <FaLock className="text-red-500"/>
              Secure Payment
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
            <input 
              type="number" 
              defaultValue={1} 
              min={1} 
              className="w-20 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition w-full sm:w-auto">
              Add to Cart
            </button>
          </div>

          {/* Optional Wishlist / Share */}
          <div className="flex gap-4 mt-3 text-gray-600 text-sm">
            <button className="hover:text-blue-600 transition">Add to Wishlist</button>
            <button className="hover:text-blue-600 transition">Share</button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1,2,3,4].map((i)=>(
            <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <Image src={`/product${i}.jpg`} alt={`Product ${i}`} width={300} height={300} className="rounded-md object-cover w-full h-48"/>
              <h3 className="text-gray-900 font-semibold mt-2">Product {i}</h3>
              <p className="text-gray-600 text-sm">$29.99</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 transition w-full">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
