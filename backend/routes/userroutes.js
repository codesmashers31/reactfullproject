import express from "express";
import { addMission } from "../controllers/authUser.js";
import { delete_data, getregisternew, registernew, update_data } from "../controllers/registerController.js";


const router = express.Router();

router.post( "/", addMission );
// router.get("/getuser", getMissions); // <-- New GET route


router.post( "/register", registernew );
router.get( "/registerdata", getregisternew );
// router.get( "/registerdata/:id", getregistersingleuser );
router.put( "/updated/:id", update_data );
router.delete( "/delete/:id", delete_data );

export default router;
