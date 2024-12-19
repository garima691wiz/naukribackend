import express from "express";
import { createCompany, deleteCompany, getAllCompanies, getCompany, updateCompany } from "../controllers/company.controller.js";

const companyRouter = express.Router();

// Define routes
companyRouter.get("/details", getAllCompanies); // Get all companies
companyRouter.get("/:id", getCompany);         // Get a specific company by ID
companyRouter.post("/create", createCompany);  // Create a new company
companyRouter.patch("/:id", updateCompany);    // Update a specific company by ID
companyRouter.delete("/:id", deleteCompany);   // Delete a specific company by ID

export default companyRouter;
