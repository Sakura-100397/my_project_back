import express from 'express';
import employeeRoutes from "./routes/employeeRoutes.mjs"; 
// import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());  

app.use('/employees', employeeRoutes);   

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// app.use(cors({
//     origin: 'http://localhost:3000',  
//     methods: ['GET', 'POST'],         
//     allowedHeaders: ['Content-Type']  
// }));

// app.use(express.json());

// app.use('/home', employeeRoutes);

// app.listen(4000, (err) => {
//     if (err) {
//       console.error('サーバー起動エラー:', err);
//       return;
//     }
//     console.log('サーバーうごいてます');
//   });
  
// app.get('/employees', (req, res) => {    
//     res.send('できたよ');
// });