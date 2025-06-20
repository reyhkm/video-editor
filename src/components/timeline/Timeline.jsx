import React, { useRef, useState, useEffect } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import { useDrop } from 'react-dnd';
import { useEditorStore } from '../../store/useEditorStore';
import { ItemTypes } from '../media/MediaItem';
import Track from './Track';
import Scrubber from './Scrubber';

const PIXELS_PER_SECOND = 50;

export default function Timeline() {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const { tracks, addClipToTrack, duration } = useEditorStore();

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.MEDIA,
    drop: (item, monitor) => {
      const dropPosition = monitor.getClientOffset();
      const timelineRect = containerRef.current.getBoundingClientRect();
      const y = dropPosition.y - timelineRect.top;
      
      // Determine which track was dropped on
      const trackHeight = 60; // Assuming fixed track height
      const trackIndex = Math.floor((y - 40) / trackHeight); // 40 is header height
      if (trackIndex >= 0 && trackIndex < tracks.length) {
        addClipToTrack(tracks[trackIndex].id, item);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const timelineWidth = duration * PIXELS_PER_SECOND;

  return (
    <div ref={containerRef} className="h-full w-full overflow-x-auto overflow-y-hidden bg-dark-primary relative">
      <div ref={drop} style={{ width: Math.max(timelineWidth, dimensions.width), height: dimensions.height }}>
        <Stage width={Math.max(timelineWidth, dimensions.width)} height={dimensions.height}>
          <Layer>
            {/* Timeline Header with time markers */}
            <Rect x={0} y={0} width={Math.max(timelineWidth, dimensions.width)} height={40} fill="#2a2a2a" />
            {Array.from({ length: duration }, (_, i) => (
              <React.Fragment key={i}>
                <Text text={String(i)} x={i * PIXELS_PER_SECOND} y={20} fill="#a0a0a0" />
                <Rect x={i * PIXELS_PER_SECOND} y={35} width={1} height={5} fill="#a0a0a0" />
              </React.Fragment>
            ))}

            {/* Tracks */}
            {tracks.map((track, index) => (
              <Track
                key={track.id}
                track={track}
                y={40 + index * 60} // 40 for header, 60 per track
                pixelsPerSecond={PIXELS_PER_SECOND}
              />
            ))}

            {/* Scrubber */}
            <Scrubber
              stageHeight={dimensions.height}
              pixelsPerSecond={PIXELS_PER_SECOND}
            />
          </Layer>
        </Stage>
        {isOver && (
          <div className="absolute inset-0 bg-dark-accent bg-opacity-30 pointer-events-none flex items-center justify-center">
            <p className="text-white text-lg">Drop media here</p>
          </div>
        )}
      </div>
    </div>
  );
}
