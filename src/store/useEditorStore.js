import { create } from 'zustand';
import { temporal } from 'zundo';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  media: [],
  tracks: [
    { id: 'track-v1', type: 'video', clips: [] },
    { id: 'track-a1', type: 'audio', clips: [] },
  ],
  selectedClipId: null,
  playback: {
    isPlaying: false,
    currentTime: 0,
    duration: 30, // Default duration in seconds
  },
};

export const useEditorStore = create(temporal((set, get) => ({
  ...initialState,

  // Media Actions
  addMedia: (file) => set(state => ({
    media: [...state.media, { id: uuidv4(), name: file.name, type: file.type, src: URL.createObjectURL(file) }]
  })),

  // Timeline Actions
  addClipToTrack: (trackId, mediaItem) => {
    const newClip = {
      id: uuidv4(),
      mediaId: mediaItem.id,
      name: mediaItem.name,
      start: 0,
      end: 5, // Default clip duration
      trackStart: get().playback.currentTime,
    };
    set(state => ({
      tracks: state.tracks.map(track =>
        track.id === trackId
          ? { ...track, clips: [...track.clips, newClip] }
          : track
      ),
    }));
  },

  updateClip: (clipId, updates) => set(state => ({
    tracks: state.tracks.map(track => ({
      ...track,
      clips: track.clips.map(clip =>
        clip.id === clipId ? { ...clip, ...updates } : clip
      ),
    })),
  })),

  splitClip: (clipId, time) => {
    // Placeholder for split logic
    console.log(`Splitting clip ${clipId} at time ${time}`);
  },

  // Selection
  setSelectedClipId: (clipId) => set({ selectedClipId: clipId }),

  // Playback Actions
  togglePlayback: () => set(state => ({ playback: { ...state.playback, isPlaying: !state.playback.isPlaying } })),
  setCurrentTime: (time) => set(state => ({ playback: { ...state.playback, currentTime: time } })),
  setDuration: (duration) => set(state => ({ playback: { ...state.playback, duration }})),

  // Reset to initial state
  reset: () => set(initialState),
}), {
  // Zundo (temporal) options
  limit: 50, // Number of past states to keep
}));

// Expose undo/redo actions
export const useTemporalStore = useEditorStore.temporal;
