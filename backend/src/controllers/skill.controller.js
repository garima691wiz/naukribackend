import Skill from "../models/skill.model.js";

// Get all companies
const getAllSkills = async (req, res) => {
    try {
        const skills = await Skill.find({});
        return res.status(200).send(skills);
    } catch (error) {
        return res.status(500).send({ message: "Error in gettingSkills", error: error.message });
    }
};

// Get a specific skills by ID
const getSkills = async (req, res) => {
    const { id } = req.params;  // Use req.params to access URL parameters
    try {
        skills = await Skill.findById(id);
        if (!skills) {
            return res.status(404).send({ message: "skills not found" });
        }
        return res.status(200).send(skills);
    } catch (error) {
        return res.status(500).send({ message: "Error in getting skills", error: error.message });
    }
};

// Create a new skills
const createSkills = async (req, res) => {
    try {
        const skills = await Skill.create(req.body);  // Use req.body for incoming data
        return res.status(201).send({ message: "skills created successfully", data: skills });
    } catch (error) {
        return res.status(500).send({ message: "Error in creating skills", error: error.message });
    }
};

// Update a skills by ID
const updateSkills = async (req, res) => {
    const { id } = req.params;  // Use req.params to access URL parameters
    try {
        const skills = await Skill.findByIdAndUpdate(id, req.body, { new: true });
        if (!skills) {
            return res.status(404).send({ message: "skills not found" });
        }
        return res.status(200).send({ message: "skills updated successfully", data: skills });
    } catch (error) {
        return res.status(500).send({ message: "Error in updating skills", error: error.message });
    }
};

// Delete a cskillsby ID
const deleteSkills = async (req, res) => {
    const { id } = req.params;  // Use req.params to access URL parameters
    try {
        const skills = await Skill.findByIdAndDelete(id);
        if (!skills) {
            return res.status(404).send({ message: "skills not found" });
        }
        return res.status(200).send({ message: "skills deleted successfully" });
    } catch (error) {
        return res.status(500).send({ message: "Error in deleting skills", error: error.message });
    }
};

export {
    getAllSkills,
    getSkills,
    createSkills,
    updateSkills,
    deleteSkills
};
