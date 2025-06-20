import React from 'react';
import { useDrag } from 'react-dnd';
import { Film, Music, Image as ImageIcon } from 'lucide-react';

export const ItemTypes = {
  MEDIA: 'media',
};

export default function MediaItem({ item }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.MEDIA,
    item: { ...item },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const getIcon = () => {
    if (item.type.startsWith('video')) return <Film className="w-8 h-8 text-dark-text-secondary" />;
    if (item.type.startsWith('audio')) return <Music className="w-8 h-8 text-dark-text-secondary" />;
    if (item.type.startsWith('image')) return <ImageIcon className="w-8 h-8 text-dark-text-secondary" />;
    return null;
  };

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="bg-dark-primary p-2 rounded-md cursor-grab flex flex-col items-center gap-2 aspect-square justify-center"
    >
      {getIcon()}
      <p className="text-xs text-dark-text-primary truncate w-full text-center" title={item.name}>
        {item.name}
      </p>
    </div>
  );
}
