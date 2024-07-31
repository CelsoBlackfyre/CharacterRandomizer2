// src/server.ts
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import characterRoutes from './routes/characterRoutes';
import initModels from './models';

const main = async () => {

  dotenv.config();

  const app = express();

  //Connect to the database
   connectDB().then(() => {
    initModels();
   });


  // Middleware
  app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));
  app.use(bodyParser.json());
  app.use('/api/characters', characterRoutes);
  app.use(express.json());

  const PORT = process.env.PORT || 5080;
  
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

main().catch(console.error)


