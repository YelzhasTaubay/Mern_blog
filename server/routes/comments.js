import {Router} from "express";
import {checkAuth} from "../utils/checkAuth.js";

const router = new Router()

// Create Comment
//http://localhost:3002/api/comments/:id
router.post('/:id', checkAuth, createComment)


















