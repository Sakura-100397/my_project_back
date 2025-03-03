import express from 'express';
import { getAllEmployees } from '../controllers/getAllEmployeeController.mjs';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
   
    await getAllEmployees(req, res); 
  } catch (err) {
    res.status(500).json({ error: 'データ取得エラー' });
  }
});

export default router;


