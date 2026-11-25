export const mapDefaultCenter: [number, number] = [41.3775, 64.5853];
export const mapDefaultZoom = 6;
export const mapMaxZoom = 19;

export const mapTileLayer = {
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  maxZoom: mapMaxZoom,
  maxNativeZoom: 19,
};
