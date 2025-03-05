import express from 'express';
import { body } from 'express-validator';
import { requestErrorHandler } from '../../helpers/helper.mjs';
import { getAllEmployees, getEmployeeDetails, registerEmployee } from '../contorollers/employeeContoroller.mjs';


const router = express.Router();

router.get('/employees', requestErrorHandler(getAllEmployees));
router.get('/employees/:id', requestErrorHandler(getEmployeeDetails));

router.post('/employees/register', 
    body('name').notEmpty().isString().withMessage('名前を入力してください。'),  
    body('address').notEmpty().isString().withMessage('住所を入力してください。'),  
    body('mail').notEmpty().isString().isEmail().withMessage('正しいメールアドレスを入力してください。'),  
    body('phone_number').notEmpty().isNumeric().isLength({min:10,max:11}).withMessage('携帯番号を入力してください。'),  
    body('position').notEmpty().isString().withMessage('役職を入力してください。'),  
    body('password').notEmpty().isString().isLength({min:8}).withMessage('8文字以上のパスワードを入力してください。'),  
    requestErrorHandler(registerEmployee));

export default router;