"use client";

import { useMapEvents } from 'react-leaflet';

export const useMapClick = (onSelect: (coords: [number, number]) => void) => {
  useMapEvents({
    click(e) {
      onSelect([e.latlng.lat, e.latlng.lng]);
    },
  });
};
