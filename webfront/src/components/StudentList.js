import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './StudentList.css'; // Ensure you have some CSS for styling
const StudentList = () => {
  const { course } = useParams();
  const navigate = useNavigate();
  // Sample student data, replace with actual data as needed
  const students = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'Daisy' },
    { id: 5, name: 'Edward' },
  ];
  // Handle Exam button click
  const handleExamClick = (studentName) => {
    // Navigate to the exam page for the specific student and course
    navigate(`/dashboard/exam/${course}`);
  };
  return (
    <div className="student-list">
      <h2>Students for {course}</h2>
      <div className="student-boxes">
        {students.map((student) => (
          <div key={student.id} className="student-box">
            <h4>{student.name}</h4>
            <button onClick={() => handleExamClick(student.name)} className="exam-button">
              Take Exam
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default StudentList;
