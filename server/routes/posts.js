import {Router} from "express";
import {register, login, getMe} from '../controllers/auth.js'
import {checkAuth} from "../utils/checkAuth.js";
import {createPost,
        getAll,
        getById,
        getMyPosts,
        removePost,
        updatePost,
        getPostComments} from "../controllers/posts.js";


const router = new Router()

//Create Post
router.post('/',checkAuth, createPost)


// Get All Posts
router.get('/',getAll)


//Get Post By Id
//http://localhost:3002/api/posts/:id
router.get('/:id', getById)


// Update Post
//http://localhost:3002/api/posts/:id
router.put('/:id', checkAuth, updatePost)


// Get My Posts
//http://localhost:3002/api/posts/user/me
router.get('/user/me', checkAuth, getMyPosts)


//Remove Post
//http://localhost:3002/api/posts/:id
router.delete('/:id', checkAuth, removePost)


//Get Post Comments
// http://localhost:3002/api/posts/comments/:id
router.get('/comments/:id', getPostComments)

export default router











