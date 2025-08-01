// models/Mission.js

import mongoose from "mongoose";


const missionSchema = new mongoose.Schema({
  id_new: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    
  },
  target: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  weaponUsed: {
    type: String,
    default: "Naalu Bullet",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Mission = mongoose.model("Mission", missionSchema);

export default Mission;