import React, { useState, useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";

const TypingEffect = () => {
  return (
    <div>
      <ReactTypingEffect
        text={[
          "expression",
          "imagination",
          "creativity",
          "passion",
          "individuality",
        ]}
        eraseDelay={750}
        typingDelay={250}
        speed={75}
        eraseSpeed={50}
      />
    </div>
  );
};
export default TypingEffect;
