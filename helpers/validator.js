const { validationResult }  = require('express-validator');

/**
 * Validator result
 * @returns next 
 */
exports.validateResult      = (req, res, next) => {
    try{
        validationResult(req).throw();
        return next(); 
    }catch(error){
        const validations   = error.array();
        return res.render('index',{validations: validations});
    }
}


