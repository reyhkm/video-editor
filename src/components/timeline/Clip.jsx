import React, { useState } from 'react';
import { Rect, Text, Group } from 'react-konva';
import { useEditorStore } from '../../store/useEditorStore';

export default function Clip({ clip, pixelsPerSecond }) {
  const { updateClip, selectedClipId, setSelectedClipId } = useEditorStore();
  const isSelected = selectedClipId === clip.id;

  const [position, setPosition] = useState({ x: clip.trackStart * pixelsPerSecond });
  const clipWidth = (clip.end - clip.start) * pixelsPerSecond;

  const handleDragEnd = (e) => {
    const newTrackStart = e.target.x() / pixelsPerSecond;
    setPosition({ x: e.target.x() });
    updateClip(clip.id, { trackStart: newTrackStart });
  };

  const handleClick = () => {
    setSelectedClipId(clip.id);
  };

  return (
    <Group
      x={position.x}
      y={5}
      width={clipWidth}
      height={48}
      draggable
      onDragEnd={handleDragEnd}
      onClick={handleClick}
      onTap={handleClick}
    >
      <Rect
        width={clipWidth}
        height={48}
        fill={isSelected ? '#6366f1' : '#4f46e5'}
        cornerRadius={4}
        stroke={isSelected ? '#a5b4fc' : '#4f46e5'}
        strokeWidth={isSelected ? 2 : 0}
      />
      <Text
        text={clip.name}
        x={5}
        y={15}
        width={clipWidth - 10}
        fill="white"
        fontFamily="sans-serif"
        fontSize={12}
        ellipsis={true}
      />
    </Group>
  );
}
