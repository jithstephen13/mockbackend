const bcrypt=require("bcrypt")
const jwt = require('jsonwebtoken');
const { userModel } = require("../../Model/usermodel");
const login=async(req,res)=>{
    const {email,password}=req.body
    const exist= await userModel.find({email})

    if(exist.length>0){
        try {
            bcrypt.compare(password,exist[0].password, function(err,result){
              if(err){
                res.send({"mssg":err.message})
              } 
              else if(result){
                const token=jwt.sign({id: exist[0]._id }, 'secrettocken');
                res.send({"mssg":"Login suceesfull","token":token})

              } 
            })
            
        } catch (error) {
             
        res.status(400).send({"err":error.message})
            
        }
    }
    else{
        res.send({"mssg":"user Not exist please sign in"})
    }


}

module.exports={login}