const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const  mongoose = require('mongoose');
const userRouter= require('./routes/users');
const authRouter= require('./routes/auth');
const postRouter= require('./routes/posts');

// Express App
const app = express();
 dotenv.config();

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
console.log("Connected to MongoDb") 
});

// adding middlewares
app.use(express.json())//body-parser
app.use(helmet())
app.use(morgan("common"))

app.use('/api/users',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/post',postRouter);



app.get('/', (req,res)=>{
  res.send('Welcome to homepage')
})


app.listen(8800,()=>{
  console.log("Backend server is running");
    
})