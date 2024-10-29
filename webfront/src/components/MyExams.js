import React from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import "./MyExams.css"; // Ensure you create this CSS file

const MyExams = () => {
  const { joinedCourses } = useOutletContext();

  const exams = [
    { id: 1, name: "Midterm Exam", courseId: 1 },
    { id: 2, name: "Final Exam", courseId: 2 },
    // Add more exams as needed
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
      {joinedCourses && joinedCourses.length > 0 ? (
        joinedCourses.map((courseId) => {
          const course = courses.find((course) => course.id === courseId);
          const exam = exams.find((exam) => exam.courseId === courseId);
          return (
            <div key={course.id} className="course-card">
              <h3>{course.name}</h3>
              {exam ? (
                <Link to={`/student-dashboard/my-exams/${exam.id}`}>
                  <button className="take-exam-button">Take Exam</button>
                </Link>
              ) : (
                <p>No exam available for this course.</p>
              )}
            </div>
          );
        })
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  );
};

export default MyExams;
