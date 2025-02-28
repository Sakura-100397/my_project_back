import mysql from 'mysql2';
import db from './db.mjs';


export const getAllEmployees = (req, res) => {  
    const query = 'SELECT * FROM employees';
    db.execute(query, (err, results) => {   
        if(err){    
            return res.status(400).json({ message: 'サーバーに接続できません'});
        }
        if(results.length === 0){    
            return res.status(404).json({ message: '社員情報が見つかりません'});
        }
        res.status(200).json(results);
    });
};

export const  createEmployee = (req, res) => {  
    const { name, }
}