import React from 'react';

// Mock component for color controls
export default function ColorControls({ clip }) {
  const controls = ['Brightness', 'Contrast', 'Saturation'];

  return (
    <div>
      <h3 className="text-md font-medium text-dark-text-primary mb-2">Color Correction</h3>
      <div className="space-y-4">
        {controls.map(control => (
          <div key={control}>
            <label className="block text-sm font-medium text-dark-text-secondary">{control}</label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="-100"
                max="100"
                defaultValue="0"
                className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-dark-accent"
              />
              <span className="text-sm text-dark-text-primary w-10 text-right">0</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
