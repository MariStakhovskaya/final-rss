const {Router} = require('express');
const Meeting = require('../models/Meeting');
const router = Router();


//create 
router.post(
    '/',
     async (req, res) => {
try {
    const {title, description, date, time, personCount, url, fulldescriptions, role, users} = req.body;

    const meeting = new Meeting({
        title, 
        description,
        fulldescriptions,
        date,
        time,
        personCount,
        url,
        role,
        users
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
router.patch('/:id',async (req, res) => {
    try {
        await Meeting.updateOne({_id:req.params.id},
          {
            title: req.body.title,
            description: req.body.description,
            fulldescriptions: req.body.fulldescriptions,
            date: req.body.date,
            time: req.body.time,
            personCount: req.body.personCount,
            url: req.body.url,
            role: req.body.role,
            users: req.body.users
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

  router.get('/:id', async (req, res) => {
    try {
      const meetingOne = await Meeting.findOne({_id: req.params.id});
    
      if (!meetingOne) {
        return res.status(404).json({message: 'meeting not found'})
      }
      // res.header({
      //   "Access-Control-Allow-Origin": "*",
      // });
      res.json(meetingOne);
      //res.send(meetingOne)
    } catch (e) {
      console.log(e);
      res
        .status(500)
        .json({ message: "Something wrong" });
    }
  });
  
  // delete 
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

  // metteing
  // router.get('/:id',async (req, res) => {
  //   try {
  //       const meeting = await Meeting.findOne({_id:req.params.id});
  //       res.header({
  //         "Access-Control-Allow-Origin": "*",
  //       });
  //       res.json(meeting)
  //     } catch (e) {
  //       console.log(e);
  //       res
  //         .status(500)
  //         .json({ message: "Something wrong" });
  //     }
    
  // })
  module.exports = router;