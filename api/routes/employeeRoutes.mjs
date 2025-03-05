import express from 'express';
import { getAllEmployees, getEmployeeDetails, registerEmployee } from '../contorollers/employeeContoroller.mjs';


const router = express.Router();

router.get('/employees', getAllEmployees);
router.get('/employees/:id', getEmployeeDetails);
router.post('/employees/register', registerEmployee);

export default router;