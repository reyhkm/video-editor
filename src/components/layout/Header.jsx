import React, { useState } from 'react';
import { FileVideo, Download, Undo, Redo } from 'lucide-react';
import { useTemporalStore } from '../../store/useEditorStore';
import ExportModal from '../ExportModal';

export default function Header() {
  const { undo, redo, futureStates, pastStates } = useTemporalStore();
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  const canUndo = pastStates.length > 0;
  const canRedo = futureStates.length > 0;

  return (
    <header className="bg-dark-surface h-14 flex items-center justify-between px-4 border-b border-dark-primary shrink-0">
      <div className="flex items-center gap-2">
        <FileVideo className="text-dark-accent" />
        <h1 className="text-lg font-semibold text-dark-text-primary">VideoEditor</h1>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={undo}
          disabled={!canUndo}
          className="p-2 rounded-md hover:bg-dark-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Undo (Ctrl+Z)"
        >
          <Undo size={20} />
        </button>
        <button
          onClick={redo}
          disabled={!canRedo}
          className="p-2 rounded-md hover:bg-dark-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Redo (Ctrl+Y)"
        >
          <Redo size={20} />
        </button>
      </div>
      <button
        onClick={() => setIsExportModalOpen(true)}
        className="bg-dark-accent text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-indigo-700 transition-colors"
      >
        <Download size={18} />
        <span>Export</span>
      </button>
      {isExportModalOpen && <ExportModal onClose={() => setIsExportModalOpen(false)} />}
    </header>
  );
}
