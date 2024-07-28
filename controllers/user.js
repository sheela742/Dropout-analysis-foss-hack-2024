const User = require('../models/user'); // Create a Mongoose model


async function createUser(req, res) {
  try {
    console.log(req.body)
    const { name,
      phoneNo,
      address,
      studentName,
      fathersName,
      currentAge,
      neverVisitedSchool,
      reasonsForDropOut,
      studentAddress,
      zipcode,
      droppedAtAge } = req.body;

    // Basic input validation (you might want to use a validation library)
    if (!name||
      !phoneNo||
      !address||
      !studentName||
      !fathersName||
      !currentAge||
      !neverVisitedSchool||
      !reasonsForDropOut||
      !studentAddress||
      !zipcode||
      !droppedAtAge) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newUser = await User.create({

      name,
      phoneNo,
      address,
      studentName,
      fathersName,
      currentAge,
      neverVisitedSchool,
      reasonsForDropOut,
      studentAddress,
      zipcode,
      droppedAtAge
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
}


module.exports = { createUser };
