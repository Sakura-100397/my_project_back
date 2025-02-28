import express from 'express';
import employeeRoutes from "./routes/employeeRoutes.mjs"; 
import cors from 'cors';
import db from './db.mjs';


const app = express();

app.use(cors({
    origin: 'http://localhost:3000',  
    methods: ['GET', 'POST'],         
    allowedHeaders: ['Content-Type']  
}));

app.use(express.json());

app.use('/home', employeeRoutes);

app.listen(4000, (err) => {
    if (err) {
      console.error('サーバー起動エラー:', err);
      return;
    }
    console.log('サーバーうごいてます');
  });
  
app.get('/employees', (req, res) => {    
    res.send('できたよ');
});