import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import employeeRoutes from "./routes/employeeRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve uploaded images statically
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Routes
app.use("/api/employees", employeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
