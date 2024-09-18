// src/app.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', routes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('CI/CD Pipeline Visualization Tool Backend with Supabase');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
