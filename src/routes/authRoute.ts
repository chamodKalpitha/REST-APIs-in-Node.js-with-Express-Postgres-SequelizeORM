import { Router } from "express";
import { signup } from "../controllers/authController";
const router = Router();

router.get("/auth", signup);

export default router;
