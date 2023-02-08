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

router.get('/user/:id', async (req, res) => {
  try {
    const user = await Users.findOne({_id:req.params.id});
    if (!user) {
      return res.status(404).json({message: 'User not found'})
    }
    const {password, ...userData} = user._doc
    res.json(userData)
    res.send(user)
        } 
        catch (e) {
          res.status(500).json({message: 'Something wrong'})
        }
})

module.exports = router;