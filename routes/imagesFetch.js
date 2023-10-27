const express = require("express");
const mongoose = require("mongoose");
const router = require("express").Router();
const detail = require("../models/imageDetails");
const Images = mongoose.model("ImageDetails");
router.post("/upload-image", async (req, res) => {
  const { base64, name, address, oldprice, newprice, discount, productType } =
    req.body;
  try {
    Images.create({
      image: base64,
      name: name,
      address: address,
      oldprice: oldprice,
      newprice: newprice,
      discount: discount,
      productType: productType,
    });
    res.send({ Status: "ok" });
  } catch (error) {
    res.send({ Status: "error", data: error });
  }
});

router.get("/get-image", async (req, res) => {
  try {
    await Images.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {}
});
module.exports = router;
