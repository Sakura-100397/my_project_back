import express from 'express';
import cors from 'cors';
import employeeRoutes from './api/routes/employeeRoutes.mjs'
import dotenv from 'dotenv';

dotenv.config();  
const app = express();

app.use(cors());
app.use(express.json());  

app.use('/api', employeeRoutes);
app.use(function(req, res) {  
  res.status(404).json({msg: "Page Not Found" });
});

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).json({ msg: "予期せぬエラーが発生しました。" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Start: http://localhost:${PORT}`);
});
