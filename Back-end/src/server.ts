import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import characterRoutes from './routes/characterRoutes';
import initModels from './models';
import path from 'path';
import fs from 'fs';

const main = async () => {
  dotenv.config();

  const app = express();

  // Connect to the database
  await connectDB();
  initModels();

  // Ensure the uploads directory exists
  const uploadDir = path.join(__dirname, '../uploads'); // Adjusted to ensure it’s one level up
  if (!fs.existsSync(uploadDir)) {
    try {
      fs.mkdirSync(uploadDir, { recursive: true });
      console.log('Uploads directory created successfully');
    } catch (err) {
      console.error('Error creating uploads directory:', err);
    }
  }

  // Middleware
  app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));
  app.use(bodyParser.json());
  app.use('/api/characters', characterRoutes);

  const PORT = process.env.PORT || 5080;

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

main().catch(console.error);
