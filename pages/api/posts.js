import puppeteer from "puppeteer";

import React from "react";
// import ReactDOMServer from "react-dom/server";
import { renderToPipeableStream } from "react-dom/server";
import PdfComponent from "../../src/app/components/pdf/index";

const fs = require("fs");
const path = require("path");

export default async function handler(req, res) {
  const jsonFile = `{ "hi": "test33" }`;
  fs.writeFileSync("./src/app/test.json", jsonFile);

  res.status(200).send({});
}
