import { Router } from "express";
import { getCharacters, createCharacter, getRandomCharacter } from "../controllers/characterController";

const router = Router();

router.get("/", getCharacters);
router.post("/", createCharacter);
router.get("/random", getRandomCharacter);

export default router;