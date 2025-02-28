import express from 'express';
import { getAllEmployees } from '../controllers/getAllEmployeeController.mjs';

const router = express.Router();

router.get('/employees',   (req, res) => { 

try {   
    const employees =  getAllEmployees();
    res.json(employees);
}catch(err){    
    res.status(404).json({ error: 'データ取得エラー'});
}
});

// router.post('/employee/register', createEmployee);

// router.get('/employees/:id', getEmployeeById);


export default router;

