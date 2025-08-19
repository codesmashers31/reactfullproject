import express from "express";
import { addMission, getMissions } from "../controllers/authUser.js";

import { registernew,getregisternew,getregistersingleuser,update_data,delete_data } from "../controllers/registerController.js";
import { createproduct,getProductbyid,getproductbyfilters } from "../controllers/productController.js";


const router = express.Router();

router.post( "/", addMission );
// router.get("/getuser", getMissions); // <-- New GET route


router.post("/register",registernew)
router.get("/registerdata",getregisternew)
router.get("/registerdata/:id",getregistersingleuser);
router.put("/updatedata/:id",update_data);

router.delete("/delete/:id",delete_data);

router.post("/postadd",createproduct);

router.get("/postadd",getProductbyid);

router.get("/postaddget",getproductbyfilters);


export default router;
