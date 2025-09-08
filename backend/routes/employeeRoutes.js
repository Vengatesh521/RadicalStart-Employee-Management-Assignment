import express from "express";
import upload from "../middleware/upload.js";
import {
  getAllEmployees,
  createEmployee,
  editEmployee,
  removeEmployee,
} from "../controllers/employeeController.js";

const router = express.Router();

// Routes with image upload
router.get("/", getAllEmployees);
router.post("/", upload.single("profile_img"), createEmployee);
router.put("/:id", upload.single("profile_img"), editEmployee);
router.delete("/:id", removeEmployee);

export default router;
