import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const TypingEffect = () => {
  return (
    <div>
      <Typewriter
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
