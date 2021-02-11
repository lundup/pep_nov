
const connection =require("../model/db")
const {v4 : uuidv4} = require("uuid");

async function getAllUsers(){
    console.log(req.body)
}
function getUserByIdPromisified(uid) {
    return new Promise(function (resolve, reject) {
      const sql = `SELECT * FROM user_table WHERE uid = '${uid}' `;
      connection.query(sql, function (error, data) {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }
  

function createUserPromisified(userObject){
    return new Promise( function(resolve , reject){

        const {uid , name , email , pw , username , bio , isPublic} = userObject;
        let sql; 
        if(isPublic != undefined){
            sql = `INSERT INTO user_table(uid , name , email , pw , username , bio , isPublic) VALUES ( '${uid}' , '${name}' , '${email}' , '${pw}' , '${username}' , '${bio}' , ${isPublic})`
        }
        else{
            sql = `INSERT INTO user_table(uid , name , email , pw , username , bio ) VALUES ( '${uid}' , '${name}' , '${email}' , '${pw}' , '${username}' , '${bio}')`
        }
        console.log(sql);
        connection.query(sql , function(error , data){
           if(error){
               console.log("im error in promise", error)
               reject(error);
           }
           else{
               resolve(data);
           }
        })

    })
}
async function createUser(req , res){
    console.log("im inside create user",req.body)
    try{
        console.log("im inside try",req.body)
        const uid = uuidv4();
         
        const {name , email , pw , username , bio , isPublic} = req.body;
        
        let userObject = {
            uid,
            name,
            email,
            pw,
            username,
            bio,
            isPublic
        }
        let data = await createUserPromisified(userObject);
        res.status(200).json({
            message:"User Created Succssfully !!!",
            data
        })

    }
    catch(error){
        console.log("im error in catch", error)
        res.json({
            
            message:"Failed to create a user !",
            error
        })

    }

}

async function getUserById(){

}

async function updateUserById(){

}

async function deleteUserById(){

}
module.exports.createUser=createUser
module.exports.getAllUsers=getAllUsers;
module.exports.getUserById=getUserById;
module.exports.updateUserById=updateUserById
module.exports.deleteUserById=deleteUserById