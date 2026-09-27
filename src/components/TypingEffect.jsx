import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const TypingEffect = () => {
  return (
    <span>
      <Typewriter
        words={[
          "expression",
          "imagination",
          "creativity",
          "passion",
          "individuality",
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={75}
        deleteSpeed={50}
        delaySpeed={750}
      />
    </span>
  );
};

export default TypingEffect;
