"use client";
import { useRef } from "react";

import data1 from "./formDocOne.json";
import "./schema.css";

function Sechma() {
  const handleMoreThanThreeDot = (item) => {
    if (item.values) {
      const resultArray = [];
      let replacementIndex = 0;
      const dotPattern = /\.{3,}/g;
      const result = item.text.split(/(\.{3,})/);

      for (const sentence of result) {
        if (dotPattern.test(sentence)) {
          resultArray.push(item.values[replacementIndex]);
          replacementIndex++;
          const idx = resultArray.findIndex((e) => e === undefined);
          if (idx !== -1) {
            resultArray[idx] = "..........................";
          }
        } else {
          resultArray.push(sentence);
        }
      }

      return resultArray.map((el) => <>{el}</>);
    }
  };

  return (
    <>
      <div
        style={{ color: "black", backgroundColor: "blue", height: "1200px" }}
      >
        A Blue Heading
      </div>

      <div style={{ color: "black", backgroundColor: "red", height: "1200px" }}>
        A red paragraph.
      </div>
    </>
  );
}

export default Sechma;
