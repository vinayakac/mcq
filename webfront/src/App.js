
// App.js
import "./App.css";
import NoMatch from "./layouts/NoMatch";
import { Route, Routes } from "react-router-dom";
import AuthPageContainer from "./layouts/AuthPageContainer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from './components/Dashboard';
import Curriculums from './components/Curriculums';
import CourseDetails from './components/CourseDetails'; 
import MCQExams from './components/MCQExams';
import Students from './components/Students';
import Exam from './components/Exam';
import StudentList from './components/StudentList';
import ExamPage from './components/ExamPage'; // Ensure the path is correct
import Courses from './components/Courses'; // Ensure the path is correct
import MainLayout from './components/MainLayout'; // Import MainLayout

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<AuthPageContainer><div>Auth Page</div></AuthPageContainer>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Dashboard and its nested routes */}
        <Route path="/" element={<MainLayout />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="curriculums" element={<Curriculums />} />
          <Route path="courses" element={<CourseDetails />} />
          <Route path="mcq-exams" element={<MCQExams />} />
          <Route path="students" element={<Students />} />

          {/* Dynamic routes for specific classes and courses */}
          <Route path="courses/:classRange" element={<Courses />} />
          <Route path="students/:course" element={<StudentList />} />
          <Route path="exam/:course" element={<ExamPage />} /> {/* Dynamic exam route */}
          
          {/* Default route for /dashboard */}
          <Route index element={<div>Dashboard Home</div>} /> {/* Placeholder content */}
        </Route>

        {/* Other routes */}
        <Route path="/exam" element={<Exam />} />

        {/* Catch-all for undefined routes */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
