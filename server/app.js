const express = require("express");
const config = require("config");
const { Server } = require("socket.io")
const cors = require("cors");
const http = require("http");
const { default: mongoose } = require("mongoose");
const { roomHandler } = require("./routes/room")

const app = express();
const PORT = process.env.port || 8000;

const whitelist = [
   "https://final-rss-server.onrender.com",
   "http://localhost:8000",
   "http://localhost:5000",
   "http://localhost:3000",
 ];

const corsOptions = {
   //origin: "http://localhost:3000",
   origin: ["http://localhost:3000", "https://MariStakhovskaya.github.io"],
   //origin: "*",
   methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
   Headers: '*',
   mode: "no-cors",
 };
 app.use(express.json({ extended: true }), cors(corsOptions));
 const server = http.createServer(app);
//  const io = new Server(server, {
//    cors: {
//        origin: "*",
//        methods: ["GET", "POST"],
//    },
// });

const io = new Server(server, cors(corsOptions));

 io.on("connection", (socket) => {
   console.log('user is connected');
   roomHandler(socket);

   socket.on("disconnect", () => {
       console.log('user is disconnected');
   })
})

app.use('/api/auth',cors(corsOptions), require('./routes/auth.routes'))
app.use('/api/auth', cors(corsOptions), require('./routes/auth.routes'))
app.use('/users', cors(corsOptions), require('./routes/users.routes'))
app.use('/meetings',cors(corsOptions), require('./routes/meeting.rotes'))


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
server.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
  })
connection();
