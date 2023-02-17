const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sql = require("./db");

const port = 5000;

const getMeals = async () => {
  const data = await sql`select * from meals`;
  return data;
};
const sendOrder = async (order) => {
  const names = order.items.map((item) => {
    return `${item.name} x ${item.amount}`;
  });
  const stringName = names.join(",");
  await sql`insert into orders(name, items, totalamount, address, datetime) values(${order.name}, ${stringName}, ${order.totalAmount}, ${order.address}, ${order.datetime})`;
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/db", async (req, res) => {
  try {
    const meals = await getMeals();
    res.json({ meals });
    console.log("Data Sent to Client :", { meals });
  } catch (error) {
    console.log("Error Fetching Data :", error);
    res.send({ Error: "error" });
  }
});

app.put("/db", async (req, res) => {
  try {
    console.log("Request from Server:", req.body);
    const dataFromClient = req.body;
    await sendOrder(dataFromClient);
    res.send({ status: "Thanks for ordering with us...\nOrder placed!" });
  } catch (error) {
    console.log("Error Putting Data :", error);
    res.send({
      Error: "error",
      status: "Sorry !!!\nCouldn't place your order!",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is Running on Port ${port}...`);
});
