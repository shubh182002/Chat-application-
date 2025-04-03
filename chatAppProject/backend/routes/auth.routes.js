import express from "express"
import { logout,login,signup } from "../controller/auth.controller.js"

const router = express.Router()

router.post("/signup" , signup)

router.post("/login", login)

router.post("/logout", logout)

export default router