import express from 'express';
import cors from 'cors';
import employeeRoutes from './api/routes/employeeRoutes.mjs'
import dotenv from 'dotenv';

dotenv.config();  
const app = express();

app.use(cors());
app.use(express.json());  

app.use('/api', employeeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Start: http://localhost:${PORT}`);
});
