import express from "express";
const router = express.Router();
import { getCodeBlockById } from "../controllers/codeBlock.js";

router.get("/:id", getCodeBlockById);

export default router;
