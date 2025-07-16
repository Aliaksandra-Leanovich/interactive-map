import { IHotelItemProps } from "./HotelItem.types";


export const HotelItem = ({ hotel }: IHotelItemProps) => {
  return (
    <li
      style={{
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        backgroundColor: "#fff",
      }}
    >
      <h3 style={{ margin: 0, fontSize: "1.2rem" }}>{hotel.name}</h3>
      <p style={{ margin: "0.25rem 0", color: "#555" }}>{hotel.address}</p>
      <p style={{ margin: 0, fontWeight: 500 }}>{hotel.price} BYN/ночь</p>
    </li>
  );
};
