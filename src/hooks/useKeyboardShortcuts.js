import { useEffect } from 'react';
import { useEditorStore, useTemporalStore } from '../store/useEditorStore';

export default function useKeyboardShortcuts() {
  const togglePlayback = useEditorStore(state => state.togglePlayback);
  // Use selectors to get only the functions needed.
  // This prevents the hook from re-executing when other state (like pastStates) changes.
  const undo = useTemporalStore(state => state.undo);
  const redo = useTemporalStore(state => state.redo);

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
