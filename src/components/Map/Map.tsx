'use client';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import { setupLeafletIcons } from '@/utils/leafletConfig';
import { useMapClick } from '@/hooks/useMapClick';

import { IMapProps } from './Map.types';

import 'leaflet/dist/leaflet.css';


setupLeafletIcons();


const MapClickHandler = ({ onSelectAction }: { onSelectAction: (coords: [number, number]) => void }) => {
  useMapClick(onSelectAction);
  return null;
};

export const Map = ({ onSelectAction, markerPosition }: IMapProps) => {
  return (
    <MapContainer
      center={[53.9, 27.5667]}
      zoom={12}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapClickHandler onSelectAction={onSelectAction} />
      {markerPosition && <Marker position={markerPosition} />}
    </MapContainer>
  );
};
