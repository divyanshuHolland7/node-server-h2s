import express from 'express';
import cors from 'cors';

import connectDB from './config/dbConfig.js';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/apiRoutes.js';
const app = express();
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter)



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});