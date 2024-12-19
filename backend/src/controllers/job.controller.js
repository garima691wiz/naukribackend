import Jobs from "../models/job.model.js";

// Get all jobs
const getAllJobs = async (req, res) => {
    try {
        const jobs = await Jobs.find({}).populate("company");;
        return res.status(200).send(jobs);
    } catch (error) {
        return res.status(500).send({
            message: "Error in getting all jobs",
            error: error.message
        });
    }
};

// Create a new job
const createJobs = async (req, res) => {
    try {
        const job = await Jobs.create(req.body);  // Use correct data for job creation
        return res.status(201).send({ message: "Job created successfully", data: job });
    } catch (error) {
        return res.status(500).send({
            message: "Error in creating job",
            error: error.message
        });
    }
};

// Get a specific job by ID
const getJobs = async (req, res) => {
    const { id } = req.params;
    try {
        const job = await Jobs.findById(id);  // Correct method name
        if (!job) {
            return res.status(404).send({ message: "Job not found" });
        }
        return res.status(200).send(job);
    } catch (error) {
        return res.status(500).send({
            message: "Error in getting job",
            error: error.message
        });
    }
};

// Update a job by ID
const updateJobs = async (req, res) => {
    const { id } = req.params;
    try {
        const job = await Jobs.findByIdAndUpdate(id, req.body, { new: true });
        if (!job) {
            return res.status(404).send({ message: "Job not found" });
        }
        return res.status(200).send({ message: "Job updated successfully", data: job });
    } catch (error) {
        return res.status(500).send({
            message: "Error in updating job",
            error: error.message
        });
    }
};

// Delete a job by ID
const deleteJob = async (req, res) => {
    const { id } = req.params;
    try {
        const job = await Jobs.findByIdAndDelete(id);
        if (!job) {
            return res.status(404).send({ message: "Job not found" });
        }
        return res.status(200).send({ message: "Job deleted successfully" });
    } catch (error) {
        return res.status(500).send({
            message: "Error in deleting job",
            error: error.message
        });
    }
};

export {
    getAllJobs,
    createJobs,
    getJobs,
    updateJobs,
    deleteJob
};
