import db from '../db.mjs';

export const createEmployee = (req, res) => {
    const { name, address, mail, phone_number, position, password } = req.body;


    if (!name || !address || !mail || !phone_number || !position || !password) {
        return res.status(400).json({ message: '必須項目が不足しています' });
    }


    const query = 'INSERT INTO employees (name, address, mail, phone_number, position, password) VALUES (?, ?, ?, ?, ?, ?)';

    db.execute(query, [name, address, mail, phone_number, position, password], (err, results) => {
        if (err) {
            console.error('データベース登録エラー: ', err);
            return res.status(500).json({ message: 'DB Error', error: err });
        }
        res.status(201).json({ message: '社員情報が登録されました', id: results.insertId });
    });
};
