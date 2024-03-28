import React from 'react'

const StudentAttendance = ({missed_classes, total_number_of_classes}:attendance) => {
  const absent_percentage = Math.floor((missed_classes/total_number_of_classes) * 100)
  return (
    <div>
      <h3>Student Attendance</h3>
      <p>Missed classes: {missed_classes}</p>
      <p>Total classes: {total_number_of_classes}</p>
      <p>Percentage of absenteeism: {absent_percentage}%</p>
    </div>
  )
}

export default StudentAttendance