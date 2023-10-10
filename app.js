const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./model");

app.use(express.json());

app.get("/student", (req, res, next) => {
  userModel
    .find()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

app.post("/student", (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;
  const phone = req.body.phone;
  const address = req.body.address;

  const user = new userModel({
    name: name,
    age: age,
    phone: phone,
    address: address,
  });

  user
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(401).json(err);
    });
});

app.delete("/student/:id", (req, res, next) => {
  const id = req.params.id;

  userModel
    .findByIdAndDelete({ _id: id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(401).json(err);
    });
});

app.put("/student/:id", (req, res, next) => {
  const id = req.params.id;
  const name = req.body.name;
  const age = req.body.age;
  const phone = req.body.phone;
  const address = req.body.address;

  userModel
    .findByIdAndUpdate(
      { _id: id },
      { $set: { name: name, age: age, phone: phone, address: address } }
    )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

mongoose
  .connect(
    "mongodb+srv://priyanshi:priyanshi@cluster0.vaxcgze.mongodb.net/CRUD"
  )
  .then((result) => {
    console.log("connected mongoose!!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(8080, () => {
  console.log("server is connected!!");
});
