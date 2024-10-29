import React from "react";
import { Link } from "react-router-dom";
import "./MyExams.css";

const MyExams = () => {
  const exams = [
    { id: 1, name: "Typing Exam 1", courseId: 1 },
    { id: 2, name: "Typing Exam 2", courseId: 1 },
    { id: 3, name: "Drawing Exam 1", courseId: 2 },
    { id: 4, name: "Drawing Exam 2", courseId: 2 },
    { id: 5, name: "Computer Exam 1", courseId: 3 },
    { id: 6, name: "Computer Exam 2", courseId: 3 },
    { id: 7, name: "PHP Exam 1", courseId: 4 },
    { id: 8, name: "PHP Exam 2", courseId: 4 },
    { id: 9, name: "Python Exam 1", courseId: 5 },
    { id: 10, name: "Python Exam 2", courseId: 5 },
  ];

  const courses = [
    { id: 1, name: "Typing", curriculum: "1-4 class" },
    { id: 2, name: "Drawing", curriculum: "1-4 class" },
    { id: 3, name: "Computer", curriculum: "5-7 class" },
    { id: 4, name: "PHP", curriculum: "5-7 class" },
    { id: 5, name: "Python", curriculum: "8-10 class" },
  ];

  return (
    <div className="my-exams-container">
      <h2>Available Courses</h2>
      {courses.length > 0 ? (
        <table className="courses-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Curriculum</th>
              <th>Exams</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => {
              const courseExams = exams.filter(
                (exam) => exam.courseId === course.id
              );

              return (
                <tr key={course.id}>
                  <td>{course.name}</td>
                  <td>{course.curriculum}</td>
                  <td>
                    {courseExams.length > 0 ? (
                      courseExams.map((exam) => (
                        <Link
                          key={exam.id}
                          to={`/exam/${exam.name.replace(/\s+/g, "-")}`} // Replace spaces with dashes for URL
                        >
                          <button className="take-exam-button">
                            {`Take ${exam.name}`}
                          </button>
                        </Link>
                      ))
                    ) : (
                      <p>No exams available for this course.</p>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  );
};

export default MyExams;
