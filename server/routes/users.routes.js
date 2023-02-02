const { Router } = require("express");
const Users = require('../models/Users');


const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "Something wrong" });
  }
});

module.exports = router;