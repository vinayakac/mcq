import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout"; // Layout that handles the sidebar
import NoMatch from "./layouts/NoMatch";
import AuthPageContainer from "./layouts/AuthPageContainer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLayout from "./layouts/AdminLayout";
import AdminAuthPageContainer from "./layouts/AdminAuthPageContainer";
import AdminLogin from "./pages/admin/Login";
import Dashboard from "./components/Dashboard";
import ExamList from "./components/ExamList";
import Curriculums from "./components/Curriculums"; // Import the new Curriculums component
import CurriculumDetail from "./components/CurriculumDetail"; // Import the CurriculumDetail component
import QuestionList from "./components/QuestionList";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Layout showSidebar={false} />}>
          <Route
            index
            element={
              <AuthPageContainer>
                <div>auth page</div>
              </AuthPageContainer>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoMatch />} />
        </Route>

        {/* User Pages */}
        <Route element={<Layout showSidebar={true} />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="exam-list" element={<ExamList />} />
          <Route path="/exam/:examNumber" element={<QuestionList />} />
          <Route path="curriculums" element={<Curriculums />} />{" "}
          {/* New route */}
          <Route
            path="curriculums/:courseId"
            element={<CurriculumDetail />}
          />{" "}
          {/* New route for details */}
        </Route>

        {/* Admin Pages */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            index
            element={
              <AdminAuthPageContainer>
                <div>Admin auth page</div>
              </AdminAuthPageContainer>
            }
          />
          <Route path="login" element={<AdminLogin />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
