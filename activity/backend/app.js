const express=require("express");
const connection =require("./model/db");
const requestRouter = require("./router/requestRouter");
const userRouter = require("./router/userRouter");


const app=express();
app.use(express.json());

app.use('/api/user', userRouter)
// app.use('/api/post', postRouter)

app.use('/api/sendRequest', requestRouter)

app.listen(3000 , function(){
    console.log("im listening at port 3000")
})