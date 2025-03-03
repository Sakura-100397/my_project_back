import createDbConnection from '../db.mjs';

export const getAllEmployees = async (req, res) => {
  try {
    const connection = await createDbConnection();  
    console.log("DB接続成功");
    
    const [results] = await connection.query('SELECT * FROM employees');  

    res.status(200).json(results);  
  } catch (error) {
    console.error("DB接続失敗:", error);
    
    res.status(400).json({ error: 'データを取得できませんでした。' });  
  }
};

