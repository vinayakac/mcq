import React from "react";
import { useNavigate } from "react-router-dom";
import "./Exams.css"; // Import the CSS file

function Exams({ course }) {
  const navigate = useNavigate();

  // Example exams and students for each course
  const examsData = {
    Typing: {
      exams: ["Typing Exam 1", "Typing Exam 2"],
      students: ["Akshata", "Santosh", "Rekha"],
    },
    Drawing: {
      exams: ["Drawing Exam 1", "Drawing Exam 2"],
      students: ["Nagaratna", "ishwar", "Shilpa"],
    },
    Computer: {
      exams: ["Computer Exam 1", "Computer Exam 2"],
      students: ["Chandana", "Bhumika", "Swati"],
    },
    PHP: {
      exams: ["PHP Exam 1", "PHP Exam 2"],
      students: ["Jyoyi", "Teju", "Vidya"],
    },
    Python: {
      exams: ["Python Exam 1", "Python Exam 2"],
      students: ["Poorvi", "Raksha", "Keerti"],
    },
  };

  const selectedCourse = examsData[course];
  const allCourses = Object.entries(examsData); // Get all courses with exams and students

  // Function to navigate to MCQ page when an exam is clicked
  const handleExamClick = (exam) => {
    navigate(`/mcq/${exam}`); // Assuming the route for MCQ questions is "/mcq/:exam"
  };

  return (
    <div className="exams">
      <h2>{course ? `Exams for ${course}` : "All Exams"}</h2>

      {/* Display a table with Course, Exams, and Student List columns */}
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
