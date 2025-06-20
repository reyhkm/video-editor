import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useEditorStore } from '../../store/useEditorStore';
import { UploadCloud } from 'lucide-react';

export default function Uploader() {
  const addMedia = useEditorStore(state => state.addMedia);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach(file => {
      addMedia(file);
    });
  }, [addMedia]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors 
        ${isDragActive ? 'border-dark-accent bg-dark-primary' : 'border-dark-secondary hover:border-dark-accent'}`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center text-dark-text-secondary">
        <UploadCloud size={32} className="mb-2" />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop files here, or click to select</p>
        )}
      </div>
    </div>
  );
}
