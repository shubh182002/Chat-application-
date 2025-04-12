import express from "express"
import { isAuthonticate } from "../middleware/verifyToken.js"
import { sendMessage, getMessage } from "../controller/message.controller.js"

const router = express.Router()

router.post("/send/:id",isAuthonticate ,sendMessage)
router.get("/:id",isAuthonticate ,getMessage)

export default router