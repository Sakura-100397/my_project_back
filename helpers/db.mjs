import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const createDbConnection = async () => {   
    try{    
    const connection = await mysql.createConnection({ 
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
});
    return connection ;
}catch (err) {  
    console.error("DB接続エラー", err);
    throw err;
}
};



export default  createDbConnection; 



