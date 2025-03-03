import express from 'express';
import { registerEmployee } from '../controllers/createEmployeeController.mjs';

const employeeRegistrationRouter = express.Router();

employeeRegistrationRouter.post('/employee/register', registerEmployee);

export default employeeRegistrationRouter;
