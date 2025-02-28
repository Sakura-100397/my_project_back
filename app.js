import express from 'express';
import cors from 'cors';
import db from './db.mjs';

const app = express();
app.use(cors());
app.use(express.json());


app.listen(5000, () => {    
    console.log('サーバーうごいてます');
});


app.get('/', (req, res) => {    
    res.send('サーバーが動作しています！');
});