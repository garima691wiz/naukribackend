import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        mobileNumber: { type: Number, required: false },
        password: { type: String, required: true },
        role: {
            type: String,
            enum: ["user", "admin", "super-admin"],
            default: "user",
        },
        profilePicture: { type: String, required: false },
        resume: { type: String, required: false },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

// Pre-save hook to hash the password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        console.error("Error hashing password:", error);
        next(error);
    }
});

// Method to compare entered password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Create the User model
const User = mongoose.model("User", userSchema);

export default User;
