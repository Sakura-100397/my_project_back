import express from 'express';
import { registerEmployee } from '../controllers/createEmployeeController.mjs';

const employeeRegistrationRouter = express.Router();

employeeRegistrationRouter.post('/', registerEmployee);

export default employeeRegistrationRouter;
