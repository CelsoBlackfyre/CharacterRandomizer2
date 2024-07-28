import { Request, Response } from "express";
import Character from "../models/character";
import { validateCharacterInput } from "./validateCharacterInput";

// Get all characters
export const getCharacters = async (req: Request, res: Response): Promise<void> => {
  try {
    const characters = await Character.findAll();
    res.json(characters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error getting characters" });
  }
};

// Create new character
export const createCharacter = async (req: Request, res: Response): Promise<Response> => {
    try {
      const input = req.body;
      const { error } = validateCharacterInput(input);
      if (error) {
        return res.status(400).json({ msg: "Invalid input" });
      }
  
      const character = await Character.create(input);
      return res.status(201).json({
        message: "Character created successfully",
        data: character,
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ msg: "Error creating character" });
    }
  };

// Get random character
export const getRandomCharacter = async (req: Request, res: Response): Promise<void> => {
  try {
    const characters = await getCharactersFromDB();
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomCharacter = characters[randomIndex];
    res.json(randomCharacter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error getting random character" });
  }
};

// Helper function to fetch characters from DB
const getCharactersFromDB = async () => {
  return await Character.findAll();
};