import React from 'react';
import { useEditorStore } from '../../store/useEditorStore';
import ColorControls from './ColorControls';

export default function PropertiesPanel() {
  const { selectedClipId, tracks } = useEditorStore();

  const selectedClip = tracks
    .flatMap(track => track.clips)
    .find(clip => clip.id === selectedClipId);

  return (
    <div className="p-4 h-full overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4 text-dark-text-primary">Properties</h2>
      {selectedClip ? (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-dark-text-secondary">Clip Name</label>
            <input
              type="text"
              value={selectedClip.name}
              readOnly
              className="mt-1 block w-full bg-dark-primary border border-dark-secondary rounded-md shadow-sm py-2 px-3 text-dark-text-primary"
            />
          </div>
          <ColorControls clip={selectedClip} />
          {/* Add more property controls here: Transform, Speed, etc. */}
        </div>
      ) : (
        <p className="text-dark-text-secondary text-sm text-center mt-8">Select a clip on the timeline to see its properties.</p>
      )}
    </div>
  );
}
