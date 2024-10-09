import React from "react";
import { useParams } from "react-router-dom";

const studentsData = {
  Painting: ["jyo", "maruti"],
  Typing: ["shyama", "vidya"],
  "Basic Computer Skills": ["teju", "gourish"],
  "Advanced Software Applications": ["swati", "veda"],
  "Introduction to Programming": ["Bindu", "chandu"],
  "Data Structures": ["smarth", "shilpa"],
  Algorithms: ["preeti", "sonu"],
  "Web Development": ["rajat", "kavya"],
};

const examsData = {
  Painting: ["Painting Exam 1", "drawing Exam "],
  Typing: ["Typing Exam 1", " speed Typing Exam 2"],
  "Basic Computer Skills": ["Basic Skills Exam"],
  "Advanced Software Applications": ["Advanced Exam 1"],
  "Introduction computer": ["computer basics Exam"],
  "Introduction to Programming": ["Intro Exam"],
  "Excel":["Excel Exam"],
  "Powerpoint":["power point Exam"],
  "Data Structures": ["DS Exam"],
  "Algorithms": ["Algorithm Exam"],
  "Web Development": ["Web Dev Exam"],
};

function CourseDetails() {
  const { course } = useParams(); // Get course name from URL params

  return (
    <div>
      <h2>Details for {course}</h2>

      <h3>Students enrolled:</h3>
      <ul>
        {studentsData[course] ? (
          studentsData[course].map((student, index) => (
            <li key={index}>{student}</li>
          ))
        ) : (
          <li>No students enrolled in this course.</li>
        )}
      </ul>

      <h3>Exams:</h3>
      <ul>
        {examsData[course] ? (
          examsData[course].map((exam, index) => (
            <li key={index}>{exam}</li>
          ))
        ) : (
          <li>No exams available for this course.</li>
        )}
      </ul>
    </div>
  );
}

export default CourseDetails;
