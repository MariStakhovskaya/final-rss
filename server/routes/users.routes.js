const { Router } = require("express");
const {check, validationResult} = require('express-validator');
const bycrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const Users = require('../models/Users');
const User = require('../models/User');


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

router.post(
  '/admin',
  [
      check("email", "Некорректный email").isEmail().normalizeEmail(),
      check("password", "Minimum password length must be 4").isLength({ min: 4}),
      check("name", "Minimum name length must be 3").isLength({ min: 3}),
    ],
   async (req, res) => {
try {
  const errors = validationResult(req);

  if (!errors.isEmpty()){
      return res.status(400).json({
          errors: errors.array(),
          message: "Incorrect registration data",
        });
  }
  const {email, password, name} = req.body;
// Check user in db
  const isPerson = await User.findOne({email})

  if (isPerson) {
    return res.status(400).json({ message: 'This email already registered'})
  }

  const hashedPassword = await bycrypt.hash(password, 12)
  const user = new User({
      email, 
      password: hashedPassword,
      name
  })

 const userData =  await user.save();
 res.header({
  "Access-Control-Allow-Origin": "*",
});
 const token = jwt.sign(
  {userId: user.id},
  config.get('jwtSecret'),
  {expiresIn: "5h"},
  );

  //const { passwordHash, ...userData } = userNew._doc

  res.json({
    userData,
    token
  })

  // res.status(201).json({message: 'User has been created'})

} catch (e) {
  res.status(500).json({message: 'Something wrong'})
}
})

module.exports = router;