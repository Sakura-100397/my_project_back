import express from 'express';
import { body } from 'express-validator';
import { requestErrorHandler } from '../../helpers/helper.mjs';
import { getAllEmployees, getEmployeeDetails, registerEmployee } from '../contorollers/employeeContoroller.mjs';


const router = express.Router();

router.get('/employees', requestErrorHandler(getAllEmployees));
router.get('/employees/:id', requestErrorHandler(getEmployeeDetails));

router.post('/employees/register', 
    body('employeeName').notEmpty().isString(),  
    body('address').notEmpty().isString(),  
    body('mail').notEmpty().isEmail(),  
    body('phone_number').notEmpty()  .isNumeric().isLength({ min: 10, max: 11 }),
    body('position').notEmpty().isString(),  
    body('password').notEmpty().isString().isLength({min:8}),  
    requestErrorHandler(registerEmployee));

export default router;