import createDbConnection from '../db.mjs';

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
