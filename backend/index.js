import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import userRouter from "./src/routes/user.routes.js";
import jobRouter from "./src/routes/job.routes.js";
import companyRouter from "./src/routes/company.routes.js"; 
import skillsRouter from "./src/routes/skill.routes.js";
import categoryRouter from "./src/routes/category.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/user", userRouter);
app.use("/api/job", jobRouter);
app.use("/api/company", companyRouter);
app.use("/api/skills", skillsRouter);
app.use("/api/category", categoryRouter);

app.get("/", (req, res) => {
    res.status(200).send("Welcome");
});

// Connect to database and start server
const PORT = process.env.PORT || 8000;

connectDB(); // Ensure DB connection is established before starting server

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
