import createDbConnection from '../db.mjs';

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

