const express=require('express');
console.log("hello")
const { getAllUsers,createUser, getUserById, deleteUserById,updateUserById } = require('../controller/userController');
const userRouter=express.Router();


userRouter.route("/").get(getAllUsers).post(createUser);
userRouter.route("/:uid").get(getUserById).delete(deleteUserById).patch(updateUserById);

module.exports=userRouter;             