import express from 'express';

import { getPosts, getPostsBySearch, getPostsByCreator, getPost, createPost, updatePost, likePost, commentPost, deletePost } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/creator', getPostsByCreator);    //fetch posts by creator
router.get('/search', getPostsBySearch);      //search for posts
router.get('/', getPosts);     //fetch all posts
router.get('/:id', getPost);   //fetch a specific post by its ID

//only authenticated users can create/update/delete/like posts, protected by auth middleware
router.post('/', auth, createPost);       
router.patch('/:id', auth, updatePost);   
router.delete('/:id', auth, deletePost);  
router.patch('/:id/likePost', auth, likePost);
router.post('/:id/commentPost', commentPost);

export default router;