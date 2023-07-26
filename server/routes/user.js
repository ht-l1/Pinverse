import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js";

// Define a POST route at /signin and /signup that map to the signin controller function. 
router.post("/signin", signin);
router.post("/signup", signup);

export default router;