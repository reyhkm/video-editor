import React from 'react';
import { Line } from 'react-konva';
import { useEditorStore } from '../../store/useEditorStore';

export default function Scrubber({ stageHeight, pixelsPerSecond }) {
  const { currentTime, setCurrentTime, isPlaying } = useEditorStore(state => state.playback);

  const x = currentTime * pixelsPerSecond;

  // A real implementation would use requestAnimationFrame for smooth updates
  // This is a simplified version that relies on Zustand state updates

  return (
    <Line
      points={[x, 0, x, stageHeight]}
      stroke="#f87171"
      strokeWidth={2}
      listening={false} // The scrubber itself is not interactive
    />
  );
}
