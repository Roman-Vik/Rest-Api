import { Router } from "express";
import postsController from "../controllers/postsController.js";
const router = new Router()

//http://localhost:7000/api/posts/
router.post('/posts', postsController.create)
//получить всех пользователей 
//http://localhost:7000/api/posts/
router.get('/posts', postsController.allPosts)
//http://localhost:7000/api/posts/6425976938a0aaeedde4baea  
router.get('/posts/:id', postsController.onePost)
//http://localhost:7000/api/posts/
router.put('/posts', postsController.updatePost)
//http://localhost:7000/api/posts/6425976938a0aaeedde4baea  
router.delete('/posts/:id', postsController.dropPost)

export default router;
