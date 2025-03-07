import { validationResult } from "express-validator";

export const requestErrorHandler = function (contoroller) {    
    return async function (req, res, next) {

        try {  
            const errors = validationResult(req);
            if (!errors.isEmpty()){ 
                return res.status(400).json({ errors: errors.array()});
            }
            await contoroller(req,res, next);
        }catch(err){  
            console.error("サーバーエラー:", err);  
            return res.status(500).json({ msg: "予期せぬエラーが発生しました", error: err.message });
        }
    };
};
