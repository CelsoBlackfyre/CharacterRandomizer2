import { Router } from "express";
import multer from "multer";
import { getCharacters, createCharacter, getRandomCharacter } from "../controllers/characterController";

const upload = multer()
const router = Router();

router.get("/", getCharacters);
router.post("/", createCharacter);
router.get("/random", getRandomCharacter);

router.post("/", upload.single("image"),createCharacter)

export default router;