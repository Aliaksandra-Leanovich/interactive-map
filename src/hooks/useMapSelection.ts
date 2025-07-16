"use client";
import { useState } from "react";

import { Hotel } from "@/types/hotel";
import { hotels } from "@/data/data-hotels";

export const useMapSelection = () => {
  const [selectedCoords, setSelectedCoords] = useState<[number, number] | null>(null);
  const [nearbyHotels, setNearbyHotels] = useState<Array<Hotel>>([]);

  const handleMapClick = (coords: [number, number]) => {
    setSelectedCoords(coords);

    const result = hotels
      .map((hotel) => {
        const dist = Math.sqrt(
          Math.pow(hotel.lat - coords[0], 2) + Math.pow(hotel.lng - coords[1], 2)
        );
        return { ...hotel, dist };
      })
      .sort((a, b) => a.dist - b.dist)
      .slice(0, 3);

    setNearbyHotels(result);
  };

  return {
    selectedCoords,
    nearbyHotels,
    handleMapClick,
  };
};
