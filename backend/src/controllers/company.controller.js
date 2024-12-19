import Company from "../models/company.model.js";

// Get all companies
const getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find({});
        return res.status(200).send(companies);
    } catch (error) {
        return res.status(500).send({ message: "Error in getting companies", error: error.message });
    }
};

// Get a specific company by ID
const getCompany = async (req, res) => {
    const { id } = req.params;  // Use req.params to access URL parameters
    try {
        const company = await Company.findById(id);
        if (!company) {
            return res.status(404).send({ message: "Company not found" });
        }
        return res.status(200).send(company);
    } catch (error) {
        return res.status(500).send({ message: "Error in getting company", error: error.message });
    }
};

// Create a new company
const createCompany = async (req, res) => {
    try {
        const company = await Company.create(req.body);  // Use req.body for incoming data
        return res.status(201).send({ message: "Company created successfully", data: company });
    } catch (error) {
        return res.status(500).send({ message: "Error in creating company", error: error.message });
    }
};

// Update a company by ID
const updateCompany = async (req, res) => {
    const { id } = req.params;  // Use req.params to access URL parameters
    try {
        const company = await Company.findByIdAndUpdate(id, req.body, { new: true });
        if (!company) {
            return res.status(404).send({ message: "Company not found" });
        }
        return res.status(200).send({ message: "Company updated successfully", data: company });
    } catch (error) {
        return res.status(500).send({ message: "Error in updating company", error: error.message });
    }
};

// Delete a company by ID
const deleteCompany = async (req, res) => {
    const { id } = req.params;  // Use req.params to access URL parameters
    try {
        const company = await Company.findByIdAndDelete(id);
        if (!company) {
            return res.status(404).send({ message: "Company not found" });
        }
        return res.status(200).send({ message: "Company deleted successfully" });
    } catch (error) {
        return res.status(500).send({ message: "Error in deleting company", error: error.message });
    }
};

export {
    getAllCompanies,
    getCompany,
    createCompany,
    updateCompany,
    deleteCompany
};
