import {createContext, useContext, useState} from 'react';

export const StudentRemarksContext = createContext<StudentRemarks>({} as StudentRemarks)

const StudentContext = () =>{
    const [studentRemark, setStudentRemarks] = useState(true)
    const changeStudentRemarks = () => setStudentRemarks(present => !present)
    return(
        <StudentRemarksContext.Provider value={{studentRemark, changeStudentRemarks}}>
            <CourseReview/>
        </StudentRemarksContext.Provider>
    )
}

const CourseReview = () =>{
    return(
        <>
        <h3>Course Review</h3>
        <h4>Please rate the course by clicking the button</h4>
        <MathematicsCourseReview/>
    </>
    )
}

const MathematicsCourseReview = () =>{
    const {studentRemark, changeStudentRemarks} = useContext(StudentRemarksContext);
    return(
        <>
            <p>The course offered was easy to learn: {studentRemark.toString()}</p>
            <button onClick={changeStudentRemarks}>Change Opinion</button>
        </>
    )
}

export default StudentContext;

