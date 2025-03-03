import express from 'express';
import { getAllEmployees } from '../controllers/getAllEmployeeController.mjs';

const getAllEmployeesRouter = express.Router();


getAllEmployeesRouter.get('/', async (req, res) => { 
  try {
    await getAllEmployees(req, res);  
  } catch (err) {
    console.error("エラー発生:", err);
    res.status(500).json({ error: 'データ取得エラー' });
  }
});

export default getAllEmployeesRouter;
