import express from "express";
import { addMission, getMissions } from "../controllers/authUser.js";
import { registernew,getregisternew,getregistersingleuser,update_data,deleteuser } from "../controllers/registerController.js";


const router = express.Router();

router.post("/", addMission);
// router.get("/getuser", getMissions); // <-- New GET route


router.post("/register",registernew)
router.get("/registerdata",getregisternew)
router.get("/registerdata/:id",getregistersingleuser);
router.put("/updatedata/:id",update_data);

router.delete("/delete/:id",deleteuser);

export default router;
