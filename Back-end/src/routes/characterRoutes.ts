import { Router } from 'express';
import multer from 'multer';
import { getCharacters, createCharacter, getRandomCharacter } from '../controllers/characterController';
import path from 'path';

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const upload = multer({ storage });

const router = Router();

router.get("/", getCharacters);
router.post("/", upload.single("image"), createCharacter);
router.get("/random", getRandomCharacter);

export default router;
