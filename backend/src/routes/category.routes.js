import express from "express";
import { createCategory, deleteCategory, getAllCategory, getCategory, updateCategory } from "../controllers/category.controller.js";

const categoryRouter = express.Router();

// Define routes
categoryRouter.get("/details", getAllCategory); // Get all companies
categoryRouter.get("/:id", getCategory);         // Get a specific company by ID
categoryRouter.post("/create", createCategory);  // Create a new company
categoryRouter.patch("/:id", updateCategory);    // Update a specific company by ID
categoryRouter.delete("/:id", deleteCategory);   // Delete a specific company by ID

export default categoryRouter;
