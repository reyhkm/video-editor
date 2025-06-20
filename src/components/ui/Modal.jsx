import React from 'react';
import { X } from 'lucide-react';

export default function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-dark-surface rounded-lg shadow-xl w-full max-w-md m-4">
        <div className="flex items-center justify-between p-4 border-b border-dark-primary">
          <h3 className="text-lg font-semibold text-dark-text-primary">{title}</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-dark-primary">
            <X size={20} className="text-dark-text-secondary" />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
