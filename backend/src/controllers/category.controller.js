import Category from "../models/category.model.js";

// Get all category
const getAllCategory = async (req, res) => {
    try {
        const category = await Category.find({});
        return res.status(200).send(category);
    } catch (error) {
        return res.status(500).send({ message: "Error in getting category", error: error.message });
    }
};

// Get a specific category by ID
const getCategory = async (req, res) => {
    const { id } = req.params;  // Use req.params to access URL parameters
    try {
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).send({ message: "Category not found" });
        }
        return res.status(200).send(category);
    } catch (error) {
        return res.status(500).send({ message: "Error in getting category", error: error.message });
    }
};

// Create a new category
const createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);  // Use req.body for incoming data
        return res.status(201).send({ message: "Category created successfully", data: category });
    } catch (error) {
        return res.status(500).send({ message: "Error in creating category", error: error.message });
    }
};

// Update a category by ID
const updateCategory = async (req, res) => {
    const { id } = req.params;  // Use req.params to access URL parameters
    try {
        const category = await Category.findByIdAndUpdate(id, req.body, { new: true });
        if (!category) {
            return res.status(404).send({ message: "Category not found" });
        }
        return res.status(200).send({ message: "Category updated successfully", data: category });
    } catch (error) {
        return res.status(500).send({ message: "Error in updating category", error: error.message });
    }
};

// Delete a category by ID
const deleteCategory = async (req, res) => {
    const { id } = req.params;  // Use req.params to access URL parameters
    try {
        const category = await Category.findByIdAndDelete(id);
        if (!category) {
            return res.status(404).send({ message: "Category not found" });
        }
        return res.status(200).send({ message: "Category deleted successfully" });
    } catch (error) {
        return res.status(500).send({ message: "Error in deleting category", error: error.message });
    }
};

export {
    getAllCategory,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
};
