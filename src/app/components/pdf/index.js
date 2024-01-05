"use client";
import React, { useEffect, useState } from "react";

export default function PdfComponent() {
  const [pdfLink, setPdfLink] = useState(null);
  const [name, setName] = useState("name");
  const generatePDF = async () => {
    await fetch("/api/posts").then(() => {
      fetch("/api/read").then((res) => {
        res.json().then((an) => {
          console.log(an);
        });
      });
    });
  };

  useEffect(() => {
    // console.log(data);
  }, []);
  return (
    <>
      <div>
        {name}
        <button onClick={generatePDF}>Generate PDF</button>
        {pdfLink && (
          <a href={pdfLink} download="example.pdf">
            Download PDF
          </a>
        )}
      </div>
    </>
  );
}
