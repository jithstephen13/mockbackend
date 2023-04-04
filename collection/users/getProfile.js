const jwt = require("jsonwebtoken");
const { userModel } = require("../../Model/usermodel");

const getProfile=async(request,response)=>{
    const token = request.headers.authorization;
    if (token) {
        let decoded = jwt.verify(token, "secrettocken");


        if (decoded) {
            const useID = decoded.id;
            const data= await userModel.find({_id:useID})
            response.send({data})
        } 
    } else {
        response.send("Please login first");
    }
}


module.exports={getProfile}