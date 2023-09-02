import express from "express";
const router = express.Router();
import { getAllCodeBlocks } from "../controllers/codeBlock.js";

router.get("/", getAllCodeBlocks);

export default router;
