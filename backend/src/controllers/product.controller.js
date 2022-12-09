const express = require("express");

const router = express.Router();
const Product = require("../models/product.model");

router.post("/add-product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).send({ product });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/all-products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.deleteOne({ _id: req.params.id });
    res.status(200).send(deletedProduct);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });

    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const product = await Product.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );

    res.status(201).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/search/:key", async (req, res) => {
  try {
    const result = await Product.find({
      $or: [
        {
          name: { $regex: req.params.key },
        },
        {
          company: { $regex: req.params.key },
        },
        {
          category: { $regex: req.params.key },
        },
      ],
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(result);
  }
});

module.exports = router;
