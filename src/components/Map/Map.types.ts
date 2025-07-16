export interface IMapProps {
  onSelectAction: (coords: [number, number]) => void;
  markerPosition: [number, number] | null;
}