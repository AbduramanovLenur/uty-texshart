function toDms(deg: number, isLat: boolean): string {
  const absolute = Math.abs(deg);
  const degrees = Math.floor(absolute);
  const minutesNotTruncated = (absolute - degrees) * 60;
  const minutes = Math.floor(minutesNotTruncated);
  const seconds = (minutesNotTruncated - minutes) * 60;
  const direction = isLat ? (deg >= 0 ? 'N' : 'S') : deg >= 0 ? 'E' : 'W';

  const formattedSeconds = seconds.toFixed(2).padStart(5, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');

  return `${degrees}°${formattedMinutes}'${formattedSeconds}"${direction}`;
}

export function formatDms(coords: [number, number]): string {
  const [lat, lng] = coords;
  return `${toDms(lat, true)} ${toDms(lng, false)}`;
}
