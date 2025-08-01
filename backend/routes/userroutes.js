import express from "express";
import { addMission, getMissions } from "../controllers/authUser.js";

const router = express.Router();

router.post("/", addMission);
router.get("/getuser", getMissions); // <-- New GET route

export default router;
