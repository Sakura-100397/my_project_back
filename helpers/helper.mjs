export const requestErrorHandler = function ( contoroller) {    
    return async function (req, res, next) {
        try {   
            return await contoroller(req,res);
        }catch(err){    
            next(err.stack);
        }
    };
};
