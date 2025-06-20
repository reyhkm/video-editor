import React, { useState } from 'react';
import Modal from './ui/Modal';
import { useVideoProcessor } from '../hooks/useVideoProcessor';

export default function ExportModal({ onClose }) {
  const [format, setFormat] = useState('mp4');
  const [resolution, setResolution] = useState('720p');
  const { exportVideo, isProcessing, progress } = useVideoProcessor();

  const handleExport = () => {
    console.log(`Exporting with format: ${format}, resolution: ${resolution}`);
    // In a real app, you would pass the timeline data to the export function
    exportVideo({ format, resolution });
  };

  return (
    <Modal title="Export Video" onClose={onClose}>
      {isProcessing ? (
        <div className="text-center">
          <p className="text-dark-text-primary mb-2">Exporting video...</p>
          <div className="w-full bg-dark-primary rounded-full h-2.5">
            <div className="bg-dark-accent h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-sm text-dark-text-secondary mt-2">{progress.toFixed(0)}%</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-dark-text-secondary">Format</label>
            <select value={format} onChange={e => setFormat(e.target.value)} className="mt-1 block w-full bg-dark-primary border border-dark-secondary rounded-md shadow-sm py-2 px-3 text-dark-text-primary">
              <option value="mp4">MP4 (H.264)</option>
              <option value="gif">GIF</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-dark-text-secondary">Resolution</label>
            <select value={resolution} onChange={e => setResolution(e.target.value)} className="mt-1 block w-full bg-dark-primary border border-dark-secondary rounded-md shadow-sm py-2 px-3 text-dark-text-primary">
              <option value="720p">720p (HD)</option>
              <option value="1080p">1080p (Full HD)</option>
            </select>
          </div>
          <div className="flex justify-end gap-4">
            <button onClick={onClose} className="px-4 py-2 rounded-md bg-dark-primary hover:bg-dark-secondary transition-colors">Cancel</button>
            <button onClick={handleExport} className="px-4 py-2 rounded-md bg-dark-accent text-white hover:bg-indigo-700 transition-colors">Export</button>
          </div>
        </div>
      )}
    </Modal>
  );
}
