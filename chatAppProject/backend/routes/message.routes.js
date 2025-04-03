import express from "express"
import { isAuthonticate } from "../middleware/verifyToken.js"
import { sendMessage } from "../controller/message.controller.js"

const router = express.Router()

router.post("/send/:id",isAuthonticate ,sendMessage)

export default router