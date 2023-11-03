"use client";
import React, { useEffect, useState } from "react";

export default function PdfComponent() {
  const [pdfLink, setPdfLink] = useState(null);
  const [name, setName] = useState("name");
  const generatePDF = async () => {
    const response = await fetch("/api/posts");
    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      setPdfLink(url);
    }

    // fetch("/api/posts")
    //   .then((response) => response.json())
    //   .then((data) => setData(data))
    //   .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    setName("jack");
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
