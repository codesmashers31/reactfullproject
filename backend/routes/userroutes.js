import express from "express";
import { addMission, getMissions } from "../controllers/authUser.js";
import { registernew,getregisternew } from "../controllers/registerController.js";


const router = express.Router();

router.post("/", addMission);
// router.get("/getuser", getMissions); // <-- New GET route


router.post("/register",registernew)
router.get("/registerdata",getregisternew)
export default router;
