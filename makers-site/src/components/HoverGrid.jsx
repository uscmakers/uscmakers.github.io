import React, { useState } from "react";
import "../styles/HoverEffect.css";

export const HoverGrid = () => {
  const [hovered, setHovered] = useState(null);

  const items = [
    {
      id: 1,
      text: "attend industry talks...",
      label: "learn",
      imgSrc: "/images/learn-logo.png",
    },
    {
      id: 2,
      text: "hone your engineering skills...",
      label: "create",
      imgSrc: "/images/create-logo.png",
    },
    {
      id: 3,
      text: "give back to our local community...",
      label: "collab",
      imgSrc: "/images/collab-logo.png",
    },
  ];

  return (
    <div className="hover-grid">
      {items.map((item) => (
        <div
          key={item.id}
          className="hover-container"
          onMouseEnter={() => setHovered(item.id)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* The original image stays visible */}
          <div className="dark-square">
            <img
              src={item.imgSrc}
              alt={item.label}
              className="dark-square-image"
            />
          </div>
          {/* The light pink square appears next to the image */}
          <div
            className={`light-square ${hovered === item.id ? "visible" : ""}`}
          >
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverGrid;
