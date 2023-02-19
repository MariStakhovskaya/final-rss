const { Router } = require("express");
const Users = require('../models/Users');


const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    res.header({
      "Access-Control-Allow-Origin": "*",
    });
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
    console.log(req.params.id)
    if (!user) {
      return res.status(404).json({message: 'User not found'})
    }
    const {password, ...userData} = user._doc
    res.header({
      "Access-Control-Allow-Origin": "*",
    });
    res.json(userData)
    //res.send(user)
        } 
        catch (e) {
          res.status(500).json({message: 'Something wrong'})
        }
})

//delete
router.delete('/user/:id',async (req, res) => {
  try {
      const user = await Users.findByIdAndDelete({_id:req.params.id});
      res.header({
        "Access-Control-Allow-Origin": "*",
      });
      res.json(user)
    } catch (e) {
      console.log(e);
      res
        .status(500)
        .json({ message: "Something wrong" });
    }
})

// update 
router.patch('/user/:id',async (req, res) => {
  try {
      await Users.updateOne({_id:req.params.id},
        {
          email: req.body.email,
          name: req.body.name,
           }
        );
       
         res.header({
          "Access-Control-Allow-Origin": "*",
        });
     // await meetingNew.save();
     // res.send(meetingNew)
      res.json({ success: true});
    } catch (e) {
      console.log(e);
      res
        .status(500)
        .json({ message: "Something wrong" });
    }
  
})

module.exports = router;