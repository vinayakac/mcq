
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './MCQExams.css'; // Ensure the CSS file exists

const MCQExams = () => {
  const [students] = useState([
    { id: 1, name: 'John Doe', course: 'Typing', examsTaken: 1 },
    { id: 2, name: 'Jane Smith', course: 'Typing', examsTaken: 2 },
    { id: 3, name: 'Mike Johnson', course: 'Typing', examsTaken: 0 },
    { id: 4, name: 'Emily Davis', course: 'Typing', examsTaken: 0 },
    { id: 5, name: 'Alice Brown', course: 'Typing', examsTaken: 0 },
    { id: 6, name: 'Charlie Wilson', course: 'Painting', examsTaken: 0 },
    { id: 7, name: 'Sophia Miller', course: 'Painting', examsTaken: 1 },
    { id: 8, name: 'Liam Anderson', course: 'Painting', examsTaken: 2 },
    { id: 9, name: 'Emma Taylor', course: 'Painting', examsTaken: 0 },
    { id: 10, name: 'Noah Thompson', course: 'Painting', examsTaken: 0 },
    { id: 11, name: 'Lucas Martinez', course: 'Introduction to C', examsTaken: 0 },
    { id: 12, name: 'Olivia Garcia', course: 'Introduction to C', examsTaken: 0 },
    { id: 13, name: 'Ava Martinez', course: 'Introduction to C', examsTaken: 1 },
    { id: 14, name: 'Mason Rodriguez', course: 'Introduction to C', examsTaken: 2 },
    { id: 15, name: 'Isabella Lee', course: 'Introduction to C', examsTaken: 0 },
    { id: 16, name: 'James Walker', course: 'Web Development', examsTaken: 0 },
    { id: 17, name: 'Mia Hall', course: 'Web Development', examsTaken: 1 },
    { id: 18, name: 'Ethan Allen', course: 'Web Development', examsTaken: 0 },
    { id: 19, name: 'Harper Young', course: 'Web Development', examsTaken: 2 },
    { id: 20, name: 'Benjamin King', course: 'Web Development', examsTaken: 0 },
    { id: 21, name: 'William Wright', course: 'Introduction to Java', examsTaken: 0 },
    { id: 22, name: 'Charlotte Scott', course: 'Introduction to Java', examsTaken: 1 },
    { id: 23, name: 'Daniel Green', course: 'Introduction to Java', examsTaken: 0 },
    { id: 24, name: 'Amelia Adams', course: 'Introduction to Java', examsTaken: 0 },
    { id: 25, name: 'Jack Hill', course: 'Introduction to Java', examsTaken: 2 },
    { id: 26, name: 'Zoe Baker', course: 'Python', examsTaken: 0 },
    { id: 27, name: 'Henry Gonzalez', course: 'Python', examsTaken: 1 },
    { id: 28, name: 'Lily Nelson', course: 'Python', examsTaken: 2 },
    { id: 29, name: 'Owen Carter', course: 'Python', examsTaken: 0 },
    { id: 30, name: 'Ella Perez', course: 'Python', examsTaken: 0 },
  ]);

  const questionsData = {
    Typing: [
      {
        id: 1,
        question: 'What is the home row on a keyboard?',
        options: [
          { id: 'a', text: 'ASDF JKL;' },
          { id: 'b', text: 'QWERTY' },
          { id: 'c', text: 'ZXCVBNM' },
          { id: 'd', text: '123456' },
        ],
        correctAnswer: 'a',
      },
      {
        id: 2,
        question: 'What is the correct typing posture?',
        options: [
          { id: 'a', text: 'Slouching' },
          { id: 'b', text: 'Sitting upright' },
          { id: 'c', text: 'Leaning forward' },
          { id: 'd', text: 'Lying down' },
        ],
        correctAnswer: 'b',
      },
    ],
    Painting: [
      {
        id: 1,
        question: 'What is the primary color?',
        options: [
          { id: 'a', text: 'Red' },
          { id: 'b', text: 'Green' },
          { id: 'c', text: 'Yellow' },
          { id: 'd', text: 'Blue' },
        ],
        correctAnswer: 'a',
      },
    ],
    'Introduction to C': [
      {
        id: 1,
        question: 'What does C stand for in programming?',
        options: [
          { id: 'a', text: 'Compile' },
          { id: 'b', text: 'Computer' },
          { id: 'c', text: 'Code' },
          { id: 'd', text: 'C language' },
        ],
        correctAnswer: 'd',
      },
    ],
    'Web Development': [
      {
        id: 1,
        question: 'What does HTML stand for?',
        options: [
          { id: 'a', text: 'Hyper Text Markup Language' },
          { id: 'b', text: 'High Text Markup Language' },
          { id: 'c', text: 'Hyperlinks and Text Markup Language' },
          { id: 'd', text: 'Hyper Text Machine Language' },
        ],
        correctAnswer: 'a',
      },
    ],
    'Introduction to Java': [
      {
        id: 1,
        question: 'What is the main function in Java?',
        options: [
          { id: 'a', text: 'main()' },
          { id: 'b', text: 'start()' },
          { id: 'c', text: 'init()' },
          { id: 'd', text: 'run()' },
        ],
        correctAnswer: 'a',
      },
    ],
    Python: [
      {
        id: 1,
        question: 'What is the correct file extension for Python files?',
        options: [
          { id: 'a', text: '.pt' },
          { id: 'b', text: '.py' },
          { id: 'c', text: '.p' },
          { id: 'd', text: '.python' },
        ],
        correctAnswer: 'b',
      },
    ],
  };

  const navigate = useNavigate();

  const handleExamClick = (course, examNumber) => {
    // Pass the selected course, questions data, and exam number to the Exam component
    navigate('/exam', {
      state: { selectedCourse: course, questionsData: questionsData, examNumber: examNumber },
    });
  };

  // Group students by course
  const groupedStudents = students.reduce((acc, student) => {
    if (!acc[student.course]) {
      acc[student.course] = [];
    }
    acc[student.course].push(student);
    return acc;
  }, {});

  return (
    <div className="mcq-exams">
      <h2>MCQ Exams</h2>
      <table className="course-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Student Names (ID)</th>
            <th>Exam 1</th>
            <th>Exam 2</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(groupedStudents).map(course => (
            <tr key={course}>
              <td>{course}</td>
              <td>
                {groupedStudents[course].map(student => (
                  <div key={student.id} style={{ padding: '10px 0' }}>
                    {student.id}: {student.name} {/* Show ID with name */}
                  </div>
                ))}
              </td>
              <td>
                <button
                  className="take-exam-button"
                  onClick={() => handleExamClick(course, 1)}
                >
                  Take Exam 1
                </button>
              </td>
              <td>
                <button
                  className="take-exam-button"
                  onClick={() => handleExamClick(course, 2)}
                >
                  Take Exam 2
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MCQExams;
