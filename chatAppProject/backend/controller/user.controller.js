import User from "../models/user.model.js"

export const getUserSidebar = async(req,res,next) => {
    try {

        const loggedInUSerId = req.user.loggedInUSerId
        
        const allUserExceptLoggedInUser = await User.find({
            _id: {$ne: loggedInUSerId},

        }).select("-password")
        
        res.status(200).json(allUserExceptLoggedInUser)
        
    } catch (error) {
        next(error)
    }
} 