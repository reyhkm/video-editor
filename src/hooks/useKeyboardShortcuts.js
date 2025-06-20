import { useEffect } from 'react';
import { useEditorStore, useTemporalStore } from '../store/useEditorStore';

export default function useKeyboardShortcuts() {
  const togglePlayback = useEditorStore(state => state.togglePlayback);
  const { undo, redo } = useTemporalStore();

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Ignore shortcuts if typing in an input field
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
      }

      // Play/Pause
      if (event.code === 'Space') {
        event.preventDefault();
        togglePlayback();
      }

      // Undo/Redo
      if (event.ctrlKey || event.metaKey) {
        if (event.key === 'z') {
          event.preventDefault();
          undo();
        }
        if (event.key === 'y') {
          event.preventDefault();
          redo();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [togglePlayback, undo, redo]);
}
