import express from "express"
import {addUser, getUser, getUserId, editUser, logout, deleteUsers} from "../controllers/users_controller.js"

const router = express.Router();

router.get('/users/', getUser);
router.get('/users/:id', getUserId);
router.post('/users', addUser);
router.patch('/users/:id', editUser);
router.delete('/users/:id', deleteUsers);

export default router;