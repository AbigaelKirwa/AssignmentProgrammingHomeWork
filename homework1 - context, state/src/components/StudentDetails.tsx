import React from 'react'

const StudentDetails = ({id, name, address}:student_details) => {
  return (
    <div>
      <h3>Student Personal Details</h3>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Address: {address}</p>
    </div>
  )
}

export default StudentDetails