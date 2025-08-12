import { validateLogin } from "../middlewares/validateLogin.js";
import express from 'express';
import { validation_email } from "../controllers/validation_email.js";





const router = express.Router()


router.post('/login',validateLogin,validation_email)


export default router;