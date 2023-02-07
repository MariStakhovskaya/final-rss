const {Router} = require('express');
const Meeting = require('../models/Meeting');
const router = Router();


//create 
router.post(
    '/',
     async (req, res) => {
try {
    const {title, description, date, time, personCount} = req.body;

    const meeting = new Meeting({
        title, 
        description,
        date,
        time,
        personCount,
    })
    await meeting.save();
    res.header({
      "Access-Control-Allow-Origin": "*",
    });
    res.status(201).json({message: 'Meeting has been created'})

  } catch (e) {
    res.status(500).json({message: 'Something wrong'})
  }
})

// update 
router.put('/:id',async (req, res) => {
    try {
        const meeting = await Meeting.findOne({_id:req.params.id});
        if (meeting) {
            meeting.title = req.body.title,
            meeting.description = req.body.description,
            meeting.date = req.body.date,
            meeting.time = req.body.time,
            meeting.personCount = req.body.personCount
           }
           res.header({
            "Access-Control-Allow-Origin": "*",
          });
        res.send(meeting)
        //res.json(meeting);
      } catch (e) {
        console.log(e);
        res
          .status(500)
          .json({ message: "Something wrong" });
      }
    
  })


//Read
router.get("/", async (req, res) => {
    try {
      const meeting = await Meeting.find();
      res.header({
        "Access-Control-Allow-Origin": "*",
      });
      res.json(meeting);
    } catch (e) {
      console.log(e);
      res
        .status(500)
        .json({ message: "Something wrong" });
    }
  });
  
  // update 
router.delete('/:id',async (req, res) => {
    try {
        const meeting = await Meeting.findByIdAndDelete({_id:req.params.id});
        res.header({
          "Access-Control-Allow-Origin": "*",
        });
        res.json(meeting)
      } catch (e) {
        console.log(e);
        res
          .status(500)
          .json({ message: "Something wrong" });
      }
    
  })
  module.exports = router;