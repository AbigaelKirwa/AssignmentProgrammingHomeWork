import React from 'react'

const StudentGrades = ({mathematics, german}:grade) => {
  return (
    <div>
      <h3>Grades</h3>
      <p>Mathematics: {mathematics}</p>
      <p>German: {german}</p>
    </div>
  )
}

export default StudentGrades