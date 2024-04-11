import express from 'express';
import {addActivity} from "../controllers/activity_controller.js";

const router = express.Router();

router.post('/activity', addActivity);

export default router;