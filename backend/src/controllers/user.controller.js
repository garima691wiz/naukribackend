import { createToken } from "../utilities/jwt.js";
import User from "../models/user.model.js";

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({
            name,
            email,
            password
        });
        return res.status(201).send({ message: "User registration successful" });
    } catch (error) {
        return res.status(500).send({ message: "Error registering user", error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).send({ message: "Invalid credentials" });
        }
        const passwordMatch = await user.matchPassword(password);
        if (!passwordMatch) {
            return res.status(400).send({ message: "Invalid credentials" });
        }
        const token = createToken({ id: user._id });

        res.cookie("authToken", token, {
            path: "/",
            expires: new Date(Date.now() + 3600000),  // 1 hour expiration
            secure: true,
            httpOnly: true,
            sameSite: "None"
        });

        return res.status(200).send({ message: "Login successful", token });
    } catch (error) {
        return res.status(500).send({ message: "Error logging in user", error: error.message });
    }
};
const logout=async(req,res)=>{
    res.clearCookie("authToken");
    return res.status(200).send({message:"User successfully loggedout"})
}

const deleteUser=async(req,res)=>{
    try{
        const{id}=req.params;
        const user=await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).send({message:"User not found"})

        }
        return res.status(200).send({message:"User deleeted successfully"})
    }catch(error){
        return res.status(200).send({message:"Error in deleting user",error:error.message})
    }
}
export {
    register,
    login,logout,deleteUser
};
