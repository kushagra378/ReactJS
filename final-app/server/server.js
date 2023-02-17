const express = require("express");
const app = express();
const records = require("./API/records.json");
const bodyParser = require("body-parser");
const fs = require("fs");

const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ records });
});

app.put("/api", (req, res) => {
  console.log("Request from Server:", req.body);
  records.push(req.body);
  res.send({ status: "Success" });

  const jsonString = fs.readFileSync("./API/records.json");
  const readData = JSON.parse(jsonString);
  readData.push(req.body);
  fs.writeFile("./API/records.json", JSON.stringify(readData), (error) => {
    if (error) {
      console.log("Error Adding in File !");
    } else {
      console.log("Sucessfully Added in File !");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is Running on port ${port} ...`);
});
