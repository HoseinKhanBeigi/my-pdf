const fs = require("fs");

export default async function handler(req, res) {
  const res1 = {
    tes: { hi1: "test2333", hi2: "test3353", hi3: "test3423443" },
  };
  const jsonText = JSON.stringify(res1, null, 2);
  fs.writeFile("./src/app/test.json", jsonText, (writeErr) => {
    if (writeErr) {
      console.error("Error writing JSON file:", writeErr);
    } else {
      console.log("JSON data has been written to output.json");
    }
  });

  res.status(200).send({});
}
