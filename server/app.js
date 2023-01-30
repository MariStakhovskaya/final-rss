const express = require("express");
const config = require("config");
const { default: mongoose } = require("mongoose");

const app = express();
//app.use(express.json())
const PORT = process.env.port || 8000;

app.get('/', (req, res) =>{
res.send('hello world')
})
mongoose.set('strictQuery', true);

const connection = async () => {
 try {
    await mongoose.connect(config.get("mongoURL"), {useUnifiedTopology: true, useNewUrlParser: true})
    console.log('Database connected successfully')

 } catch (error) {
    console.log('Error while connecting with the database', error)
 }
}
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
connection();
