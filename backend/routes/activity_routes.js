import express from 'express';
import {addActivity, getActivityId, getAllActivity, getCountActivityUsers, getAllActivityWithUsername} from "../controllers/activity_controller.js";

const router = express.Router();

router.post('/activity', addActivity);
router.get('/activity/:id', getActivityId);
router.get('/activity/', getAllActivity);
router.get('/activity-users/', getCountActivityUsers);
router.get('/activity-users/detail/:username', getAllActivityWithUsername);

export default router;