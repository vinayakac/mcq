import "./App.css";
import { Navigate } from 'react-router-dom';
import NoMatch from "./layouts/NoMatch";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from './components/Dashboard';
import Curriculums from './components/Curriculums';
import CourseDetails from './components/CourseDetails'; 
import MCQExams from './components/MCQExams';
import Students from './components/Students';
import Exams from './components/Exams';
import StudentList from './components/StudentList';
import ExamPage from './components/ExamPage'; 
import Courses from './components/Courses'; 
import MainLayout from './components/MainLayout'; 
import StudentLogin from "./pages/StudentLogin";
import StudentDashboard from "./components/StudentDashboard";
import JoinCourses from './components/JoinCourses';
import CourseDetail from './components/CourseDetail';  
import MyExams from "./components/MyExams";
import Register from "./pages/Register"; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/student-login" replace />} />
        <Route path="student-login" element={<StudentLogin />} />
        <Route path="student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        
        {/* Main dashboard route */}
        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="curriculums" element={<Curriculums />} />
          <Route path="courses" element={<CourseDetails />} />
          <Route path="mcq-exams" element={<MCQExams />} />
          <Route path="students" element={<Students />} />
          <Route path="courses/:classRange" element={<Courses />} />
          <Route path="students/:course" element={<StudentList />} />
          <Route path="exam/:course" element={<ExamPage />} />
        </Route>

        {/* Course joining and exams */}
        <Route path="/exams" element={<Exams />} />
        <Route path="/join-courses" element={<JoinCourses />} />
        <Route path="/join-courses/:courseId" element={<CourseDetail />} />
        <Route path="/myexams" element={<MyExams />} />
        <Route path="/register" element={<Register />} />
        
        {/* Catch-all for undefined routes */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
