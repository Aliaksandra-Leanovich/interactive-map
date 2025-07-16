"use client";

import { HotelItem } from "../HotelItem/HotelItem";

import { IHotelListProps } from "./HotelList.types";


export const HotelList = ({ hotels }: IHotelListProps) => {
  if (hotels.length === 0) return <p>Нет отелей поблизости.</p>;

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Ближайшие отели</h2>
      <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1rem" }}>
        {hotels.map((hotel) => (
          <HotelItem key={hotel.id} hotel={hotel} />
        ))}
      </ul>
    </div>

  );
};
