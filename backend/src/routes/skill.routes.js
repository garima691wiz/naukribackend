import express from "express";;
import { getAllSkills ,getSkills,createSkills,updateSkills,deleteSkills} from "../controllers/skill.controller.js";

const skillsRouter=express.Router();
// Define routes
skillsRouter.get("/details", getAllSkills); 
skillsRouter.get("/:id", getSkills);        
skillsRouter.post("/create", createSkills);  
skillsRouter.patch("/:id", updateSkills);   
skillsRouter.delete("/:id", deleteSkills);

export default skillsRouter;
