const User = require("../models/user")

async function getStudentDetails(req, res) {
  try {
    const zipcode = req.query.zipcode;

    if (!zipcode) {
      return res.status(400).json({ message: 'Zip code is required' });
    }

    const students = await User.find({ zipcode });

    if (students.length === 0) {
      return res.status(404).json({ message: 'No students found with this zip code' });
    } else {
      const students_arr=[]
      students.forEach(element => {
        const student = {
          studentName: element.studentName,
          fathersName: element.fathersName,
          currentAge: element.currentAge,
          neverVisitedSchool: element.neverVisitedSchool,
          reasonsForDropOut: element.reasonsForDropOut,
          studentAddress: element.studentAddress,
          zipcode: element.zipcode,
          droppedAtAge: element.droppedAtAge
        }
        students_arr.push(student)
      });
      res.status(200).json(students_arr);
    }



  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching students' });
  }
}

module.exports = { getStudentDetails }