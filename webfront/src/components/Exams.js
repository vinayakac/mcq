import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Exams({ course }) {
  const navigate = useNavigate();
  const [selectedExam, setSelectedExam] = useState(null);

  const examsData = {
    Typing: {
      exams: ["Typing Exam 1", "Typing Exam 2"],
      students: ["Anusha", "Vikram", "Bhavya", "Nakul"],
    },
    Drawing: {
      exams: ["Drawing Exam 1", "Drawing Exam 2"],
      students: ["Dharma", "Yashmika", "Ayush", "Ratik"],
    },
    Computer: {
      exams: ["Computer Exam 1", "Computer Exam 2"],
      students: ["Aishwarya", "Kavya", "Srushti", "Shayir"],
    },
    PHP: {
      exams: ["PHP Exam 1", "PHP Exam 2"],
      students: ["Anjali", "Medha", "Nidhi", "Ditya"],
    },
    Python: {
      exams: ["Python Exam 1", "Python Exam 2"],
      students: ["Yogesh", "Avindya", "Poorvi", "Chintan"],
    },
  };

  const selectedCourse = examsData[course];
  const allCourses = Object.entries(examsData);

  const handleExamClick = (exam) => {
    setSelectedExam(exam); // Set the selected exam
    navigate(`/mcq/${exam}`);
  };

  const styles = {
    exams: {
      margin: "20px",
    },
    title: {
      backgroundColor: "#f0f0f0",
      padding: "10px",
      borderRadius: "5px",
      textAlign: "center",
      marginBottom: "20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
    },
    th: {
      border: "1px solid #ddd",
      padding: "8px",
      textAlign: "center",
      backgroundColor: "#e0e0e0",
    },
    td: {
      border: "1px solid #ddd",
      padding: "8px",
      verticalAlign: "top",
    },
    courseCell: {
      backgroundColor: "#d9edf7",
    },
    examButton: {
      backgroundColor: "#4caf50",
      color: "white",
      border: "none",
      padding: "5px 10px",
      cursor: "pointer",
      borderRadius: "3px",
      transition: "background-color 0.3s",
    },
    examButtonHover: {
      backgroundColor: "#45a049",
    },
    studentList: {
      backgroundColor: "#f9f9f9",
      padding: "5px",
      borderRadius: "5px",
    },
    ul: {
      paddingLeft: "20px",
      margin: "0",
      listStyleType: "none",
    },
    rowHover: {
      backgroundColor: "#f1f1f1", // Highlight row on hover
    },
    selectedExamButton: {
      backgroundColor: "#388e3c", // Change color when the exam button is selected
    },
  };

  return (
    <div style={styles.exams}>
      <h2 style={styles.title}>
        {course ? `Exams for ${course}` : "All Exams"}
      </h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Course</th>
            <th style={styles.th}>Exams</th>
            <th style={styles.th}>Student List</th>
          </tr>
        </thead>
        <tbody>
          {course ? (
            selectedCourse && selectedCourse.exams.length > 0 ? (
              selectedCourse.exams.map((exam, index) => (
                <tr
                  key={index}
                  style={{
                    ...(selectedExam === exam ? styles.rowHover : {}),
                    cursor: "pointer", // Show cursor pointer
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      styles.rowHover.backgroundColor)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  <td style={{ ...styles.td, ...styles.courseCell }}>
                    {course}
                  </td>
                  <td style={styles.td}>
                    <button
                      style={{
                        ...styles.examButton,
                        ...(selectedExam === exam
                          ? styles.selectedExamButton
                          : {}),
                      }}
                      onClick={() => handleExamClick(exam)}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          styles.examButtonHover.backgroundColor)
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          styles.examButton.backgroundColor)
                      }
                    >
                      {exam}
                    </button>
                  </td>
                  <td style={styles.td}>
                    <ul style={{ ...styles.ul, ...styles.studentList }}>
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
                  <tr
                    key={exam}
                    style={{
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        styles.rowHover.backgroundColor)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    {examIndex === 0 && (
                      <td
                        style={{ ...styles.td, ...styles.courseCell }}
                        rowSpan={courseData.exams.length}
                      >
                        {courseName}
                      </td>
                    )}
                    <td style={styles.td}>
                      <button
                        style={{
                          ...styles.examButton,
                          ...(selectedExam === exam
                            ? styles.selectedExamButton
                            : {}),
                        }}
                        onClick={() => handleExamClick(exam)}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            styles.examButtonHover.backgroundColor)
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            styles.examButton.backgroundColor)
                        }
                      >
                        {exam}
                      </button>
                    </td>
                    <td style={styles.td}>
                      <ul style={{ ...styles.ul, ...styles.studentList }}>
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
