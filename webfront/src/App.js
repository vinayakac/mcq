// src/App.js
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom"; // Import Navigate for redirection
import "./App.css";
import Layout from "./layouts/Layout"; // Layout with Sidebar
import StudentLayout from "./layouts/StudentLayout";
import NoMatch from "./layouts/NoMatch";
import AdminLogin from "./pages/admin/AdminLogin";
import Register from "./pages/Register";
import Dashboard from "./components/Dashboard";
import Curriculums from "./components/Curriculums";
import Courses from "./components/Courses";
import Exams from "./components/Exams";
import Students from "./components/Students";
import McqExam from "./components/McqExam";
import CoursesPage from "./components/CoursesPage";
import StudentLogin from "./pages/StudentLogin";
import StudentDashboard from "./components/StudentDashboard";
import JoinCourse from "./components/JoinCourse";
import MyExams from "./components/MyExams";
import Exam from "./components/Exam";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/student-login" replace />} />
        <Route
          path="student-login"
          element={<StudentLogin />} // Show the login page first
        />
        <Route path="/" element={<StudentLayout />}>
          <Route path="student-dashboard" element={<StudentDashboard />} />
          <Route
            path=""
            element={<h2>Welcome to your Student Dashboard!</h2>}
          />{" "}
          {/* Default message */}
          <Route path="join-course" element={<JoinCourse />} />
          <Route path="my-exams" element={<MyExams />} />
          <Route path="/exam/:examId" element={<Exam />} />
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