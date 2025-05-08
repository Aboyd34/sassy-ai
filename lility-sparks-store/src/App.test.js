import React from "react";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">
        Lility Sparks – Tech Essentials
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Product Card 1 */}
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-blue-500 transition">
          <img
            src="https://via.placeholder.com/200"
            alt="Wireless Earbuds"
            className="rounded-lg mb-4 w-full"
          />
          <h2 className="text-xl font-semibold mb-2">Wireless Earbuds</h2>
          <p className="text-sm text-gray-300 mb-2">
            Compact, noise-cancelling, and Bluetooth 5.2 powered.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>

        {/* Product Card 2 */}
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-blue-500 transition">
          <img
            src="https://via.placeholder.com/200"
            alt="Smart Watch"
            className="rounded-lg mb-4 w-full"
          />
          <h2 className="text-xl font-semibold mb-2">Smart Watch</h2>
          <p className="text-sm text-gray-300 mb-2">
            Heart rate, GPS, and fitness tracking at your wrist.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>

        {/* Product Card 3 */}
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-blue-500 transition">
          <img
            src="https://via.placeholder.com/200"
            alt="USB-C Hub"
            className="rounded-lg mb-4 w-full"
          />
          <h2 className="text-xl font-semibold mb-2">USB-C Hub</h2>
          <p className="text-sm text-gray-300 mb-2">
            6-in-1 dock for HDMI, SD cards, and USB 3.0 devices.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;