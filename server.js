const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

//routes


app.post("/patients", (req, res) => {
  console.log(req.body);
  res.send(req.body)
});

app.post("/encounter", (req, res) => {
    console.log(req.body);
    res.send(req.body)
  });

mongoose.set("strictQuery",false)
mongoose.
  connect(
    "mongodb+srv://max:<make1213>@cluster0.9slz1rk.mongodb.net/node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to Mongoose");
    app.listen(3000, () => {
      console.log("Node API app is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error)
  })
