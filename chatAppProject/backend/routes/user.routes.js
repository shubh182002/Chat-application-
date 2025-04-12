import express from "express"
import { isAuthonticate } from "../middleware/verifyToken.js"
import { getUserSidebar } from "../controller/user.controller.js"

 const  router  = express.Router()

 router.get("/" , isAuthonticate, getUserSidebar)

 export default router