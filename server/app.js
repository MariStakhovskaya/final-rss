const express = require("express");
const config = require("config");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

const app = express();
const PORT = process.env.port || 8000;

const whitelist = [
   "https://final-rss-server.onrender.com",
   "http://localhost:8000",
   "http://localhost:5000",
   "http://localhost:3000",
 ];

const corsOptions = {
   origin: "http://localhost:3000",
   methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
   Headers: '*',
   mode: "no-cors",
 };
 app.use(express.json({ extended: true }), cors(corsOptions));
app.use('/api/auth',cors(corsOptions), require('./routes/auth.routes'))
app.use('/api/auth', cors(corsOptions), require('./routes/auth.routes'))
app.use('/users', cors(corsOptions), require('./routes/users.routes'))
app.use('/meetings',cors(corsOptions), require('./routes/meeting.rotes'))

// app.get('/', (req, res) =>{
// res.send('hello world')
// })
mongoose.set('strictQuery', true);

const connection = async () => {
 try {
    await mongoose.connect(config.get("mongoURL"), {
      useUnifiedTopology: true,
      useNewUrlParser: true
   })
    console.log('Database connected successfully')

 } catch (error) {
    console.log('Error while connecting with the database', error);
    //process.exit(1);
 }
}
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
  })
connection();
