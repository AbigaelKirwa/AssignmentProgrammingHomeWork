import React from 'react'
import StudentDetails from './StudentDetails'
import StudentAttendance from './StudentAttendance';
import StudentGrades from './StudentGrades';

const StudentProfile = () => {

  const Student_Details ={
    id:134670,
    name:"Abigael Kirwa",
    address:"00200 Nairobi"
  };

  const Student_Attendance ={
    missed_classes: 10,
    total_number_of_classes: 30
  };

  const Student_Grade ={
    id:"134670",
    mathematics:"A",
    german:"B" 
  };

  return (
    <div>
      <h1>Student Profile</h1>
      <StudentDetails
        id={Student_Details.id}
        name={Student_Details.name}
        address={Student_Details.address}
      />
      <StudentAttendance
        missed_classes={Student_Attendance.missed_classes}
        total_number_of_classes={Student_Attendance.total_number_of_classes}
      />
      <StudentGrades
        mathematics={Student_Grade.mathematics}
        german = {Student_Grade.german}
      />
    </div>
  )
}

export default StudentProfile