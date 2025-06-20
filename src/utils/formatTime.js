export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const milliseconds = Math.floor((seconds - Math.floor(seconds)) * 100);

  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(remainingSeconds).padStart(2, '0');
  const paddedMilliseconds = String(milliseconds).padStart(2, '0');

  return `${paddedMinutes}:${paddedSeconds}.${paddedMilliseconds}`;
}
