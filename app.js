import express from 'express';
import cors from 'cors';
import getAllEmployeesRouter from './routes/getAllEmployeesRoutes.mjs'; 
import employeeRegistrationRouter from './routes/employeeRegisterRoutes.mjs';
import getEmployeeDetailsRouter from './routes/getEmployeeDetailRoutes.mjs';
import dotenv from 'dotenv';

dotenv.config();  
const app = express();

app.use(cors());
app.use(express.json());  

app.use('/employees', getAllEmployeesRouter);  
app.use('/employees/register', employeeRegistrationRouter);
app.use('/employees', getEmployeeDetailsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
