import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { errorHandler } from "../utils/error.js";

export const signup = async (req,res,next) => {
    console.log(req.body);
    const  {username,email,password,confirmPassword,profilePic,gender} = req.body

    let validUser

    validUser = await User.findOne({email})

    if(validUser){
        return next(errorHandler(400,"User already exists"))
    }

    if(password !== confirmPassword ){
        return  next(errorHandler(400,"password don't match"))
          
    }

    const hashedPassword = bcryptjs.hashSync(password, 10)

    const  boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const  girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
        gender,
        profilePic : gender === "male" ? boyProfilePic : girlProfilePic,
    })
    try {
        // generate jsonweb token
        const token = jwt.sign({id: newUser._id},process.env.JWT_SECRET)

        await newUser.save()

        res.cookie("access_token",token , {httpOnly: true}).status(201).json({
            _id : newUser._id,
            username: newUser.username,
            email: newUser.email,
           
            profilePic : newUser.profilePic
        }) 

    } catch (error) {
        next(errorHandler(500,"Internal server error"))
        console.log("Error " + error)
       
    }

}

export const login = (req,res) => {}

export const logout = (req,res) => {}