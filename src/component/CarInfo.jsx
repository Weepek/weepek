import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const CarInfo = () => {
  const [expanded, setExpanded] = useState(false);
  const [showFullSpecs, setShowFullSpecs] = useState(false);

  return (
    <div
      className={`transition-all duration-500 ease-in-out bg-black/70 backdrop-blur-md text-white rounded-t-2xl 
                  ${expanded ? 'h-auto max-h-[70vh] overflow-y-auto' : 'h-24'}`}
    >
      <div
        className="flex items-center justify-between px-6 h-24 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div>
          <h1 className="text-2xl font-bold">Bugatti Chiron</h1>
          <p className="text-blue-400">Super Sport</p>
        </div>
        <button className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
          {expanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </button>
      </div>

      {expanded && (
        <div className="px-6 pb-8 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-gray-400">Power</p>
              <p className="text-xl font-semibold">1600 HP</p>
            </div>
            <div>
              <p className="text-gray-400">0-60 mph</p>
              <p className="text-xl font-semibold">2.4 s</p>
            </div>
            <div>
              <p className="text-gray-400">Top Speed</p>
              <p className="text-xl font-semibold">304 mph</p>
            </div>
            <div>
              <p className="text-gray-400">Engine</p>
              <p className="text-xl font-semibold">8.0L W16</p>
            </div>
          </div>

          {showFullSpecs && (
            <div className="space-y-4 mt-4">
              <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">Full Specifications</h2>
              <div>
                <h3 className="text-lg font-medium text-blue-400">Engine & Performance</h3>
                <ul className="mt-2 space-y-1">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Engine Type</span>
                    <span>8.0L Quad-Turbo W16</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Horsepower</span>
                    <span>1,600 hp @ 7,000 rpm</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Torque</span>
                    <span>1,180 lb-ft @ 2,000-6,000 rpm</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Transmission</span>
                    <span>7-speed dual-clutch automatic</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-blue-400">Dimensions</h3>
                <ul className="mt-2 space-y-1">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Length</span>
                    <span>178.9 inches</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Width</span>
                    <span>80.2 inches</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Height</span>
                    <span>47.7 inches</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Weight</span>
                    <span>4,400 lbs</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <button
            onClick={() => setShowFullSpecs(!showFullSpecs)}
            className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>{showFullSpecs ? 'Hide details' : 'View full specifications'}</span>
            {showFullSpecs ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      )}
    </div>
  );
};

export default CarInfo;