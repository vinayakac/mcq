import React, { useState } from "react";

const studentsData = [
  { name: "Anusha", course: "Typing", standard: "1", gender: "Female", age: 6 },
  { name: "Bhavya", course: "Typing", standard: "2", gender: "Female", age: 7 },
  { name: "Dharma", course: "Typing", standard: "3", gender: "Male", age: 8 },
  { name: "Ayush", course: "Drawing", standard: "4", gender: "Male", age: 9 },
  {
    name: "Aishwarya",
    course: "Drawing",
    standard: "4",
    gender: "Female",
    age: 9,
  },
  { name: "Vikram", course: "Drawing", standard: "5", gender: "Male", age: 10 },
  {
    name: "Yashmika",
    course: "Computer",
    standard: "3",
    gender: "Female",
    age: 8,
  },
  {
    name: "Kavya",
    course: "Computer",
    standard: "5",
    gender: "Female",
    age: 10,
  },
  {
    name: "Anjali",
    course: "Computer",
    standard: "8",
    gender: "Female",
    age: 13,
  },
  { name: "Srushti", course: "PHP", standard: "1", gender: "Female", age: 6 },
  { name: "Medha", course: "PHP", standard: "7", gender: "Female", age: 12 },
  { name: "Yogesh", course: "PHP", standard: "9", gender: "Male", age: 14 },
  {
    name: "Avindya",
    course: "Python",
    standard: "6",
    gender: "Female",
    age: 11,
  },
  {
    name: "Nidhi",
    course: "Python",
    standard: "10",
    gender: "Female",
    age: 15,
  },
  { name: "Nakul", course: "Python", standard: "6", gender: "Male", age: 11 },
  { name: "Ratik", course: "PHP", standard: "1", gender: "Male", age: 6 },
  { name: "Poorvi", course: "PHP", standard: "7", gender: "Female", age: 12 },
  { name: "Shayir", course: "PHP", standard: "10", gender: "Male", age: 15 },
  { name: "Ditya", course: "Python", standard: "9", gender: "Male", age: 14 },
  { name: "Chintan", course: "Python", standard: "8", gender: "Male", age: 13 },
];

function Students() {
  const [students, setStudents] = useState(studentsData);
  const [newStudent, setNewStudent] = useState("");
  const [newCourse, setNewCourse] = useState("");
  const [newStandard, setNewStandard] = useState("");
  const [newGender, setNewGender] = useState("");
  const [newAge, setNewAge] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (
      newStudent.trim() !== "" &&
      newCourse.trim() !== "" &&
      newStandard.trim() !== "" &&
      newGender.trim() !== "" &&
      newAge.trim() !== ""
    ) {
      const student = {
        name: newStudent.trim(),
        course: newCourse.trim(),
        standard: newStandard.trim(),
        gender: newGender.trim(),
        age: parseInt(newAge, 10),
      };
      setStudents((prevStudents) => [...prevStudents, student]);
      setNewStudent("");
      setNewCourse("");
      setNewStandard("");
      setNewGender("");
      setNewAge("");
    }
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="students">
      <h2>All Students</h2>

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a student"
        className="search-bar"
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Standard</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student, index) => (
              <tr key={index}>
                <td>
                  <span
                    className={
                      student.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                        ? "highlight"
                        : ""
                    }
                  >
                    {student.name}
                  </span>
                </td>
                <td>{student.course}</td>
                <td>{student.standard}</td>
                <td>{student.gender}</td>
                <td>{student.age}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No students available.</td>
            </tr>
          )}
        </tbody>
      </table>

      <form onSubmit={handleAddStudent} className="add-student-form">
        <input
          type="text"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
          placeholder="Enter student name"
          required
        />
        <input
          type="text"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          placeholder="Enter course"
          required
        />
        <input
          type="text"
          value={newStandard}
          onChange={(e) => setNewStandard(e.target.value)}
          placeholder="Enter standard"
          required
        />
        <input
          type="text"
          value={newGender}
          onChange={(e) => setNewGender(e.target.value)}
          placeholder="Enter gender"
          required
        />
        <input
          type="number"
          value={newAge}
          onChange={(e) => setNewAge(e.target.value)}
          placeholder="Enter age"
          required
        />
        <button type="submit">Add Student</button>
      </form>

      <style jsx>{`
        .students {
          padding: 20px;
          background-color: #f9f9f9; /* Change to your preferred background color */
        }

        .search-bar {
          padding: 8px;
          margin-bottom: 20px;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }

        th,
        td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }

        th {
          background-color: #e0e0e0; /* Change to your preferred header color */
        }

        tr:nth-child(even) {
          background-color: #f2f2f2; /* Change the background color for even rows */
        }

        .add-student-form {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .add-student-form input {
          padding: 8px;
          flex: 1;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .add-student-form button {
          padding: 8px 12px;
          border: none;
          background-color: #4caf50; /* Change button color */
          color: white;
          border-radius: 4px;
          cursor: pointer;
        }

        .add-student-form button:hover {
          background-color: #45a049; /* Darker button color on hover */
        }
        tr:hover {
          background-color: #ddd; /* Change row hover color */
        }
      `}</style>
    </div>
  );
}

export default Students;
