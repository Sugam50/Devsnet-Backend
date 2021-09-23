const UserModel = require("../models/usersModel");
const bycrypt = require('bcrypt')
const saltRounds = 10;
const register =async (req,res)=>{
    const {email,password}=req.body;
    try {
        const alreadyExists = await UserModel.findOne({where:{email}})
        if(alreadyExists){
            res.status(401).send("Email ALready Exists");
        }
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        const NewUser = new UserModel({
            fullName:"Sugam",
            email:String(email).toLowerCase(),
            password:hash,
        })
        const SavedUser =await NewUser.save();
        res.status(200).send(SavedUser);
    } catch (err) {
        console.error(err);
        res.status(500).send("Something went wrong")
    }
}
module.exports=register;