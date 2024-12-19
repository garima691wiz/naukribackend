import express from "express";
import { createJobs, getAllJobs , getJobs,updateJobs,deleteJob } from "../controllers/job.controller.js";

const jobRouter=express.Router();

jobRouter.get("/details", getAllJobs); 
jobRouter.get("/:id", getJobs);        
jobRouter.post("/create", createJobs);  
jobRouter.patch("/:id", updateJobs);   
jobRouter.delete("/:id", deleteJob);   

export default jobRouter;
