import mysql from 'mysql2';
import db from '../db.mjs';


export const getAllEmployees = (req, res) => {
    db.query('SELECT * FROM employees', (err, results) => {
        if (err) {
            res.status(500).json({ message: 'DB Error', error: err });
        } else {
            res.status(200).json(results);  
        }
    });
};

