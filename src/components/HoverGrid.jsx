import React, { useState } from "react";
import "../styles/HoverEffect.css";
import learnLogo from "../images/learn-logo.png";
import createLogo from "../images/create-logo.png";
import collabLogo from "../images/collab-logo.png";
export const HoverGrid = () => {
  const [hovered, setHovered] = useState(null);

  const items = [
    { id: 1, text: "attend industry talks...", label: "learn", imgSrc: learnLogo },
    { id: 2, text: "hone your engineering skills...", label: "create", imgSrc: createLogo},
    { id: 3, text: "give back to our local community...", label: "collab", imgSrc: collabLogo },
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
            <img src={item.imgSrc} alt={item.label} className="dark-square-image" />
          </div>
          {/* The light pink square appears next to the image */}
          <div className={`light-square ${hovered === item.id ? "visible" : ""}`}>
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverGrid;
