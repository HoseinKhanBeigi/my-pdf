"use client";
import React, { useEffect, useRef, useState } from "react";

import data1 from "./formDocOne.json";
import "./schema.css";

function Sechma({ name }) {
  const [val, setVal] = useState(name);
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

  useEffect(() => {
    setVal("setTest");
  }, []);

  return (
    <>
      <div className="container">
        <div className="pageA4">
          {val}
          {data1.map((e) =>
            e.pages?.map((page, idx) => (
              <>
                <div className="pageContent">
                  {page.entities.map((item) => {
                    return (
                      <>
                        {item.id !== "table" ? (
                          item.bold || item.contractTitle ? (
                            <div className="itemText">{item.text}</div>
                          ) : item.description ? (
                            <div className="itemDescription">{item.text}</div>
                          ) : item.title ? (
                            <div className="itemTitle">{item.text}</div>
                          ) : (
                            <div className="text">
                              {!item.regex ? (
                                <>{item.text}</>
                              ) : (
                                <>{handleMoreThanThreeDot(item)}</>
                              )}
                            </div>
                          )
                        ) : (
                          <Table tableArray={item?.table} />
                        )}
                      </>
                    );
                  })}

                  <div className="sign">
                    <span>امضاومهر کارگزاری</span>
                    <span>امضاومهر مشتری</span>
                  </div>
                </div>
              </>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Sechma;

const Table = ({ tableArray }) => {
  return (
    <div className="table">
      {tableArray?.map((row, index) => (
        <div key={row} className="row">
          {row.map((col) => (
            <div key={col} className="cell">
              {
                <span key={col}>
                  {col.text} &nbsp;{" "}
                  {Array.isArray(col?.itemValue)
                    ? !col.div
                      ? col?.value?.map((e) => (
                          <span style={{ paddingLeft: "16px" }}>{e}</span>
                        ))
                      : col?.itemValue?.map((e) => (
                          <div style={{ paddingLeft: "16px" }}>{e}</div>
                        ))
                    : col?.itemValue}
                </span>
              }
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
