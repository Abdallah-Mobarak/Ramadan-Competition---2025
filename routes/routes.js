const express = require('express');
const router = express.Router();
const {submitForm} = require('../controllers/formController');
const {validateUser} = require('../Validation/userValidation');

router.get('/form', (req, res) => res.render('form'));
router.get('/', (req, res) => res.render('home'));
router.post('/submit', validateUser,submitForm);

module.exports = router;
