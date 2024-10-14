import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./layouts/Layout"; // Layout includes Sidebar and main content
import Dashboard from "./components/Dashboard";
import Curriculums from "./components/Curriculums";
import Courses from "./components/Courses";
import CourseDetails from "./components/CourseDetails";
import Exams from "./components/Exams";
import Students from "./components/Students";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Routes for Courses and CourseDetails */}
        <Route path="/dashboard" element={<Layout component={<Dashboard />} />} />
        <Route path="/curriculums" element={<Layout component={<Curriculums />} />} />
        <Route path="/courses/:curriculum" element={<Layout component={<Courses />} />} />
        {/* Ensure this route captures both curriculum and course */}
        <Route path="/course-details/:curriculum/:course" element={<Layout component={<CourseDetails />} />} />

        <Route path="/exams" element={<Layout component={<Exams />} />} />
        <Route path="/students" element={<Layout component={<Students />} />} />
      </Routes>
    </div>
  );
}

export default App;
