const fs = require("fs");
const filePath = "./src/app/test.json";

export default async function handler(req, res) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }

    try {
      console.log(data);
      const jsonData = JSON.parse(data);
      res.status(200).send({ jsonData });
      // console.log("JSON Data:", jsonData);
    } catch (parseError) {
      console.error(`Error parsing JSON: ${parseError}`);
    }
  });
}
