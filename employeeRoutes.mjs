import express from 'express';
import employeeController from '../controllers/employeeController';

const router = express.Router();

router.get('/', employeeController.getEmployees);

router.post('/', employeeController.addEmployee);

router.get('/:id', employeeController.getEmployeeById);


module.export = router;


