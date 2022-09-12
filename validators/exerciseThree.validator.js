const { check }             = require('express-validator');
const { validateResult }    = require('../helpers/validator');
const { User }              = require('../models/index');

module.exports = [
    check('username')
    .exists()
    .withMessage('El nombre del usuario debe existir')
    .notEmpty()
    .withMessage('El nombre del usuario no puede ser vacio')
    .isString()
    .withMessage('El nombre del usuario debe ser un texto'),
    check('email')
    .exists()
    .withMessage('El correo electrónico debe existir')
    .notEmpty()
    .withMessage('El correo electrónico no puede ser vacio')
    .isEmail()
    .withMessage('El correo electrónico no corresponde a su tipo')
    .custom(async (value) => {
        return await User.findOne({ where: { email: value } }).then(email => {
            if (email) {
                return Promise.reject('El correo esta en uso');
            }
        });    
    }),
    check('password')
    .exists()
    .withMessage('La contraseña debe existir')
    .notEmpty()
    .withMessage('La contraseña no puede ser vacio')
    .isString()
    .withMessage('La contraseña debe ser un texto')
    .isLength({ min: 6, max: 12 })
    .withMessage('La contraseña debe tener de 6 a 12 caracteres'),
    check('passwordConfirmation', 'La confirmación de la contraseña debe ser la misma que la contraseña')
    .exists()
    .withMessage('La confirmación de la contraseña debe existir')
    .notEmpty()
    .withMessage('La confirmación de la contraseña no puede ser vacio')
    .isString()
    .withMessage('La confirmación de la contraseña debe ser un texto')
    .isLength({ min: 6, max: 12 })
    .withMessage('La confirmación de la contraseña debe tener de 6 a 12 caracteres')
    .custom((value, { req }) => value === req.body.password),
    check('age', 'La edad es requerida')
    .exists()
    .withMessage('La edad debe existir')
    .notEmpty()
    .withMessage('La edad no puede ser vacio')
    .isNumeric()
    .withMessage('La edad debe ser un número')
    .custom(async (value) => {
        if(value < 18){
            return Promise.reject('El usuario es menor de edad');
        }else{
            if(value % 1 != 0){
                return Promise.reject('La edad debe ser entera');
            }
        }
    }),
    check('gender')
    .exists()
    .withMessage('El género debe existir')
    .isIn(['M', 'F'])
    .withMessage('El genero debe ser M o F'),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]
