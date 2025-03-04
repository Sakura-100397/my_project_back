import express from 'express';
import {getEmployeeDetails} from '../controllers/getEmployeeDetailContoroller.mjs';

const getEmployeeDetailsRouter = express.Router();

getEmployeeDetailsRouter.get('/:id', getEmployeeDetails);

export default getEmployeeDetailsRouter;
