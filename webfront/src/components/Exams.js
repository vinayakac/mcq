import React from "react";
import { useNavigate } from "react-router-dom";
import "./Exams.css";

function Exams({ course }) {
  const navigate = useNavigate();

  const examsData = {
    Typing: {
      exams: ["Typing Exam 1", "Typing Exam 2"],
      students: ["Alice Johnson", "Bob Smith", "Charlie Brown"],
    },
    Drawing: {
      exams: ["Drawing Exam 1", "Drawing Exam 2"],
      students: ["David Wilson", "Eva Green", "Frank Wright"],
    },
    Computer: {
      exams: ["Computer Exam 1", "Computer Exam 2"],
      students: ["Grace Hall", "Henry Adams", "Ivy Clark"],
    },
    PHP: {
      exams: ["PHP Exam 1", "PHP Exam 2"],
      students: ["Jack King", "Lily Scott", "Mason Lee"],
    },
    Python: {
      exams: ["Python Exam 1", "Python Exam 2"],
      students: ["Nora White", "Oliver Green", "Paula Blue"],
    },
  };

  const selectedCourse = examsData[course];
  const allCourses = Object.entries(examsData);

  const handleExamClick = (exam) => {
    navigate(`/mcq/${exam}`); // Navigate to the MCQ page with the exam name
  };

  return (
    <div className="exams">
      <h2>{course ? `Exams for ${course}` : "All Exams"}</h2>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Exams</th>
            <th>Student List</th>
          </tr>
        </thead>
        <tbody>
          {course ? (
            selectedCourse && selectedCourse.exams.length > 0 ? (
              selectedCourse.exams.map((exam, index) => (
                <tr key={index}>
                  <td>{course}</td>
                  <td>
                    <button onClick={() => handleExamClick(exam)}>
                      {exam}
                    </button>
                  </td>
                  <td>
                    <ul>
                      {selectedCourse.students.map((student, studentIndex) => (
                        <li key={studentIndex}>{student}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No exams available for this course.</td>
              </tr>
            )
          ) : allCourses.length > 0 ? (
            allCourses.map(([courseName, courseData], courseIndex) => (
              <React.Fragment key={courseIndex}>
                {courseData.exams.map((exam, examIndex) => (
                  <tr key={examIndex}>
                    {examIndex === 0 && (
                      <td rowSpan={courseData.exams.length}>{courseName}</td>
                    )}
                    <td>
                      <button onClick={() => handleExamClick(exam)}>
                        {exam}
                      </button>
                    </td>
                    <td>
                      <ul>
                        {courseData.students.map((student, studentIndex) => (
                          <li key={studentIndex}>{student}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan="3">No exams available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Exams;
