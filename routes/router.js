const express                   = require('express');
const router                    = express.Router();
const exerciseOne               = require('../controllers/exerciseOne.controller');
const exerciseTwo               = require('../controllers/exerciseTwo.controller');
const exerciseThree             = require('../controllers/auth/exerciseThree.controller');
const exerciseTwoValidator      = require('../validators/exerciseTwo.validator');
const exerciseThreeValidator    = require('../validators/exerciseThree.validator');

// Ejercicio 2
router.route('/exerciseOne').get(exerciseOne.create);
router.route('/exerciseTwo').get(exerciseTwo.create).post(exerciseTwoValidator, exerciseTwo.saveInfo);
router.route('/exerciseThree').get(exerciseThree.create).post(exerciseThreeValidator, exerciseThree.store);
router.route('/exerciseThreeCities/:id/:state').get(exerciseThree.getCities);

module.exports  = router