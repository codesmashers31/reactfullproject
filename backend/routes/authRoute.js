import { validateLogin } from "../middlewares/validateLogin.js";
import express from 'express';
import { validation_email } from "../controllers/validation_email.js";
import {generateToken} from "../controllers/generateToken.js"
import multer from "multer";
import {filecontroller,getProfile} from "../controllers/filecontroller.js"



const router = express.Router()

const storage = multer.diskStorage({destination:(req,file,cb)=>{
    cb(null,"upload/")
},filename:(req,file,cb)=>{
 cb(null,Date.now()+"-"+file.originalname);
}})

const upload = multer({storage:storage});

router.get("/getprofile",getProfile)
router.post("/create",upload.single("avatar"),filecontroller);

router.post('/login',validateLogin,validation_email)

router.post('/loginauth',generateToken)



export default router;