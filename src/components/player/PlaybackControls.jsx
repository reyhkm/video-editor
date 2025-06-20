import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { useEditorStore } from '../../store/useEditorStore';
import { formatTime } from '../../utils/formatTime';

export default function PlaybackControls() {
  const { playback, togglePlayback, setCurrentTime } = useEditorStore();
  const { isPlaying, currentTime, duration } = playback;

  const handleSeek = (e) => {
    setCurrentTime(parseFloat(e.target.value));
  };

  return (
    <div className="flex items-center gap-4 p-2 text-white">
      <button onClick={togglePlayback} className="hover:text-dark-accent">
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <span className="text-sm font-mono">{formatTime(currentTime)}</span>
      <input
        type="range"
        min="0"
        max={duration}
        step="0.1"
        value={currentTime}
        onChange={handleSeek}
        className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-dark-accent"
      />
      <span className="text-sm font-mono">{formatTime(duration)}</span>
    </div>
  );
}
