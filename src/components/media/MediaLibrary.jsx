import React from 'react';
import Uploader from './Uploader';
import MediaItem from './MediaItem';
import { useEditorStore } from '../../store/useEditorStore';

export default function MediaLibrary() {
  const media = useEditorStore(state => state.media);

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-semibold mb-2 text-dark-text-primary">Media Library</h2>
      <Uploader />
      <div className="flex-grow mt-4 overflow-y-auto pr-1">
        {media.length === 0 ? (
          <p className="text-dark-text-secondary text-sm text-center mt-8">No media files imported. Drag & drop files to get started.</p>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {media.map(item => (
              <MediaItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
