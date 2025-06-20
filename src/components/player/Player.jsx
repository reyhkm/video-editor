import React, { useRef, useEffect } from 'react';
import { useEditorStore } from '../../store/useEditorStore';
import PlaybackControls from './PlaybackControls';

export default function Player() {
  const videoRef = useRef(null);
  const { isPlaying, currentTime, setCurrentTime } = useEditorStore(state => state.playback);
  const tracks = useEditorStore(state => state.tracks);

  // This is a mock player. A real implementation would need to composite
  // the video tracks and overlays onto a canvas.
  const firstVideoSrc = tracks
    .find(t => t.type === 'video')?.clips[0]?.mediaId;
  const media = useEditorStore(state => state.media);
  const videoMedia = media.find(m => m.id === firstVideoSrc);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.play().catch(e => console.error("Playback error:", e));
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current && Math.abs(videoRef.current.currentTime - currentTime) > 0.1) {
      videoRef.current.currentTime = currentTime;
    }
  }, [currentTime]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black relative">
      <video
        ref={videoRef}
        src={videoMedia?.src}
        className="max-w-full max-h-[calc(100%-60px)] object-contain"
        onTimeUpdate={handleTimeUpdate}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50">
        <PlaybackControls />
      </div>
    </div>
  );
}
