const express= require("express")
const { login } = require("../collection/users/login")
const { Register } = require("../collection/users/Register")
const { getProfile } = require("../collection/users/getProfile")
const { calculate } = require("../collection/calculate")



const Allroutes=express.Router()


//  userLogin

Allroutes.post("/sigin",Register)
Allroutes.post("/login",login)
Allroutes.get("/getProfile",getProfile)
















module.exports={Allroutes}