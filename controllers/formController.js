const User = require('../models/users');

exports.submitForm = async (req, res) => {
  try {
    const { fullName, department, gender, age, message,phone,Sheikh  } = req.body;
    const newUser = new User({ fullName, department, gender, age, message ,phone,Sheikh });
    await newUser.save();
    res.render('success');
  } catch (err) {
    res.status(500).send('Error saving data');
    console.log(err);
    
  }
};
