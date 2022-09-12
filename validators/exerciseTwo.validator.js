const { check }             = require('express-validator');
const { validateResult }    = require('../helpers/validator');

module.exports = [
    check('info', 'Ingrese un texto...')
    .exists()
    .notEmpty()
    .isString(),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]
