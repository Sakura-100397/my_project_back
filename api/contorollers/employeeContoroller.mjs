import { validationResult } from 'express-validator';
import createDbConnection from '../../helpers/db.mjs';


// 一覧取得
export const getAllEmployees = async (req, res) => {
    try {
      const connection = await createDbConnection();  
      console.log("DB接続成功");
      
      const [results] = await connection.query('SELECT * FROM employees');  
  
      res.status(201).json(results);  
    } catch (error) {
      console.error("DB接続失敗:", error);
      
      res.status(500).json({ error: 'データを取得できませんでした。' });  
    }
  };


//  詳細取得 
  export const getEmployeeDetails = async ( req, res) => {  
    const { id } = req.params;

    console.log(`Received id: ${id}`);

    try{    
        const connection = await createDbConnection();
        console.log(`Executing query for employee with id: ${id}`);
        const [rows] = await connection.execute('SELECT * FROM employees WHERE id = ?', [id]);

        if (rows.length > 0){   
            console.log(`Employee found: ${JSON.stringify(rows[0])}`);  
            res.json(rows[0]);
        }else{  
            console.log(`No employee found with id: ${id}`); 
            res.status(404).json ( { message: "社員情報が見つかりません" ,status:404});
        }
    }catch (error) {    
        console.error('Error fetching employee:', error); 
        res.status(500).json({ message: "サーバーエラー" , error: error.message || error });
    }
 };


//  登録
export const registerEmployee = async (req, res) => {
   try {
        const errors = validationResult(req);
        if (!errors.isEmpty()){ 
            return res.status(400).json({errors: errors.array()});
        }

        const { employeeName, address, mail, phone_number, position, password } = req.body;
        const db = await createDbConnection(); 

        const query = 'INSERT INTO employees (employeeName, address, mail, phone_number, position, password) VALUES (?, ?, ?, ?, ?, ?)';
        const [results] = await db.execute(query, [employeeName, address, mail, phone_number, position, password]);

        await db.end();

        res.status(200).json({  message: '社員情報が登録されました', id: results.insertId , status: 200});

    } catch (err) {
        console.error('データベース登録エラー: ', err);
        res.status(500).json({ msg: 'DB Error', error: err.message, status: 500 });
    }
};

