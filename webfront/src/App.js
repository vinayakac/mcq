// src/App.js
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom"; // Import Navigate for redirection
import "./App.css";
import Layout from "./layouts/Layout"; // Layout with Sidebar
import NoMatch from "./layouts/NoMatch";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./components/Dashboard";
import Curriculums from "./components/Curriculums";
import Courses from "./components/Courses";
import Exams from "./components/Exams";
import Students from "./components/Students";
import McqExam from "./components/McqExam";
import CoursesPage from "./components/CoursesPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/login" />} // Redirect root path to login
        />
        <Route
          path="login"
          element={<Login />} // Show the login page first
        />
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
