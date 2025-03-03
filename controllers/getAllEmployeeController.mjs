import db from '../db.mjs';

export const getAllEmployees = (req, res) => {
    db.query('SELECT * FROM employees', (err, results) => {
        if (err) {
            res.status(400).json({ message: 'データを取得できませんでした。', error: err });
        } else {
            res.status(200).json(results);  
        }
    });
};

