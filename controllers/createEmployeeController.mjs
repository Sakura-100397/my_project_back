
import db from '../db.mjs';


export const createEmployees = (req, res) => {
    db.query('INSERT INTO  * FROM employees', (err, results) => {
        if (err) {
            res.status(500).json({ message: 'DB Error', error: err });
        } else {
            res.status(200).json(results);  
        }
    });
};
