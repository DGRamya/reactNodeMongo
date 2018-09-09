const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../../models/Item");

//@route  GET api/items
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

//@route  POST api/items
router.post("/", (req, res) => {
  console.log("At server" + JSON.stringify(req.body));
  const newItem = new Item({
    name: req.body.name
  });
  console.log("At server" + req);
  newItem.save().then(item => res.json(item));
});
module.exports = router;
