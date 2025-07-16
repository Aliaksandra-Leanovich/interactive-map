"use client";

import dynamic from "next/dynamic";

import { HotelList } from "@/components/HotelList/HotelList";
import { useMapSelection } from "@/hooks/useMapSelection";

const DynamicMap = dynamic(
  () => import('@/components/Map/Map').then(mod => mod.Map),
  { ssr: false }
);


export default function Home() {
  const { selectedCoords, nearbyHotels, handleMapClick } = useMapSelection();

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Интерактивная карта отелей</h1>
      <DynamicMap onSelectAction={handleMapClick} markerPosition={selectedCoords} />
      {selectedCoords && <HotelList hotels={nearbyHotels} />}
    </main>
  );
}
