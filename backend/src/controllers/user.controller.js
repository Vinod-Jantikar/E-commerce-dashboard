const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

router.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).send( user );
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/register", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    res.status(200).send( users );
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    const user = await User.findOne(req.body).select("-password");
    if (user) {
      res.status(201).send( user );
    } else {
      res.send({ error: "User not found" });
    }
  } else {
    res.send({ error: "User not found" });
  }
});

module.exports = router;
