import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout"; // Layout with Sidebar
import NoMatch from "./layouts/NoMatch";
import AdminLogin from "./pages/admin/AdminLogin";
import Register from "./pages/Register";
import StudentLogin from "./pages/StudentLogin";
import StudentDashboard from "./components/StudentDashboard";
import JoinCourses from "./components/JoinCourses"; // Import JoinCourses component
import MyExams from "./components/MyExams"; // Import MyExams component
import DashboardContent from "./components/DashboardContent"; // Import DashboardContent
import Dashboard from "./components/Dashboard"; // Import the Dashboard component
import Curriculums from "./components/Curriculums"; // Import the Curriculums component
import Courses from "./components/Courses"; // Import the Courses component
import Exams from "./components/Exams"; // Import the Exams component
import McqExam from "./components/McqExam"; // Import the McqExam component
import CoursesPage from "./components/CoursesPage"; // Import the CoursesPage component
import Students from "./components/Students"; // Import the Students components
import JoinedCourses from "./components/JoinedCourses";
import Exam from "./components/Exam"; // Import Exam component
import Logout from "./components/Logout"; // Create this component

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/student-login" replace />} />
        <Route path="student-login" element={<StudentLogin />} />
        <Route path="student-dashboard" element={<StudentDashboard />}>
          <Route index element={<DashboardContent />} />
          <Route path="join-course" element={<JoinCourses />} />
          <Route path="joined-courses" element={<JoinedCourses />} />{" "}
          {/* Use relative path */}
          <Route path="my-exams" element={<MyExams />} />
          <Route path="my-exams/:examId" element={<Exam />} />
          <Route path="logout" element={<Logout />} />
        </Route>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="curriculums"
          element={
            <Layout>
              <Curriculums />
            </Layout>
          }
        />
        <Route
          path="courses"
          element={
            <Layout>
              <Courses />
            </Layout>
          }
        />
        <Route
          path="exams"
          element={
            <Layout>
              <Exams />
            </Layout>
          }
        />
        <Route path="/mcq/:exam" element={<McqExam />} />
        <Route path="/courses/:curriculumName" element={<CoursesPage />} />
        <Route
          path="students"
          element={
            <Layout>
              <Students />
            </Layout>
          }
        />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
