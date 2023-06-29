import {Router} from "express";
import {register, login, getMe} from '../controllers/auth.js'
import {checkAuth} from "../utils/checkAuth.js";


const router = new Router()

//Register
router.post('/register',register)

//Log In
router.post('/login',login)

//Get Me
router.get('/me', checkAuth ,getMe)
                    // middleware
export default router











