import { validateLogin } from "../middlewares/validateLogin.js";
import express from 'express';
import { validation_email } from "../controllers/validation_email.js";

import {generateToken} from "../controllers/generateToken.js"





const router = express.Router()


router.post('/login',validateLogin,validation_email)

router.post('/loginauth',generateToken)



export default router;