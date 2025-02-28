import connection from './db.js';

console.log("実行中");

const id = '0001';
const name = '永井さくら';
const address =  '東京都杉並区';
const mail = 'sakura@example.com';
const phone_number = '08012345678';
const position = 'Analyst';
const password = 'password123';

const query = `INSERT INTO employees (id,name,address,mail,phone_number,position,password)  
                VALUES (?,?,?,?,?,?,?)`;

connection.query(query, [id,name,address,mail,phone_number,position,password], (err, result) => {   
    if(err){    
        console.error('エラーが発生しました： ' + err.stack);
        return;
    }
    console.log('成功しました: ' + result.insertId);
});