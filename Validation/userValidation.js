const { check, validationResult } = require('express-validator');

const validateUser = [
  check('fullName')
    .notEmpty().withMessage('الاسم مطلوب')
    .isLength({ min: 3, max: 60 }).withMessage('الاسم يجب أن يكون بين 3 و 60 حرفًا'),

  // check('email')
  //   .isEmail().withMessage('البريد الإلكتروني غير صالح'),

  check('phone')
  .notEmpty().withMessage('رقم الهاتف مطلوب')
  .isNumeric().withMessage('رقم الهاتف يجب أن يكون أرقام فقط')
  .isLength({ min: 11, max: 11 }).withMessage('رقم الهاتف يجب أن يكون مكونًا من 11 رقمًا بالضبط'),

  // check('department')
  //   .notEmpty().withMessage('القسم مطلوب'),

  // check('gender')
  //   .notEmpty().withMessage('الجنس مطلوب')
  //   .isIn(['ذكر', 'أنثى']).withMessage('الجنس يجب أن يكون male أو female'),

  check('age')
    .notEmpty().withMessage('العمر مطلوب')
    .isInt({ min: 5, max: 50 }).withMessage('العمر يجب أن يكون بين 5 و 50 سنة'),

  check('message')
    .optional()
    .isLength({ max: 300 }).withMessage('الرسالة يجب ألا تتجاوز 300 حرف'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('error', { errors: errors.array(), formData: req.body });
    }
    next();
  }
];

module.exports = { validateUser };