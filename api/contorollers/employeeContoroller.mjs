import createDbConnection from '../../db.mjs';


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
            res.status(404).json ( { message: "社員情報が見つかりません" });
        }
    }catch (error) {    
        console.error('Error fetching employee:', error); 
        res.status(500).json({ message: "サーバーエラー" , error: error.message || error });
    }
 };


 
export const registerEmployee = async (req, res) => {
    try {
        const { name, address, mail, phone_number, position, password } = req.body;

        if (!name || !address || !mail || !phone_number || !position || !password) {
            return res.status(400).json({ message: '必須項目が不足しています' });
        }

        const db = await createDbConnection(); 

        const query = 'INSERT INTO employees (name, address, mail, phone_number, position, password) VALUES (?, ?, ?, ?, ?, ?)';
        const [results] = await db.execute(query, [name, address, mail, phone_number, position, password]);

        await db.end();

        res.status(201).json({ message: '社員情報が登録されました', id: results.insertId });
    } catch (err) {
        console.error('データベース登録エラー: ', err);
        res.status(500).json({ message: 'DB Error', error: err.message });
    }
};