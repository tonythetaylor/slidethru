import express from "express";
import { getUser, getUsers, signup, updateUser, deleteUser, getUsersForSidebar } from "../controllers/user.controllers.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

// CRUD Routes /users
router.get('/', protectRoute, getUsersForSidebar); 
// router.get('/', getUsers); // /users
router.get('/:userId', getUser); // /users/:userId
router.post('/signup', signup); // /users
router.put('/:userId', updateUser); // /users/:userId
router.delete('/:userId', deleteUser); // /users/:userId

export default router;