import express from 'express';
import {  addMission} from '../controllers/authUser.js';


const router = express.Router();



router.post("/",addMission)
// router.get('/leodata/',getleodata)


// router.get('/:id',get_user_data_new)

export default router;