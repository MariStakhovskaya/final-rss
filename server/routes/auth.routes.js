const {Router} = require('express');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const router = Router();

router.post(
    '/register',
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

    await user.save();

    res.status(201).json({message: 'User has been created'})

  } catch (e) {
    res.status(500).json({message: 'Something wrong'})
  }
})

router.post(
    '/login',
    [
        check("email", "Incorrect email").isEmail().normalizeEmail(),
        check("password", "Enter password").exists(),
      ],
     async (req, res) => {
        try {
            const errors = validationResult(req);
        
            if (!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Incorrect login data",
                  });
            }
           
            const {email, password} = req.body;

            const user = await User.findOne({email})

            if (!user) {
                return res.status(400).json({message: 'User not found'})
            }

            const isMatchPassword = await bycrypt.compare(password, user.password)

            if (!isMatchPassword) {
                return res.status(400).json({message: 'incorrect password'})
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: "20h"},
                );

            res.json({token, userId: user.id})
        
          } catch (e) {
            res.status(500).json({message: 'Something wrong'})
          }
})

module.exports = router;