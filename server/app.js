const express = require("express");
const config = require("config");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

const app = express();
const PORT = process.env.port || 8000;

const corsOptions = {
   origin: "https://final-rss-server.onrender.com",
   methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
   mode: "no-cors",
 };
 app.use(express.json(cors(corsOptions)))
app.use('/api/auth',cors(corsOptions), require('./routes/auth.routes'))
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
    process.exit(1);
 }
}
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
  })
connection();
