import React from 'react';
import { Group, Rect, Text } from 'react-konva';
import Clip from './Clip';

export default function Track({ track, y, pixelsPerSecond }) {
  return (
    <Group y={y}>
      <Rect x={0} y={0} width={3000} height={58} fill="#3a3a3a" />
      <Text
        text={track.type.toUpperCase()}
        x={10}
        y={20}
        fill="#a0a0a0"
        fontStyle="bold"
      />
      {track.clips.map(clip => (
        <Clip
          key={clip.id}
          clip={clip}
          pixelsPerSecond={pixelsPerSecond}
        />
      ))}
    </Group>
  );
}
