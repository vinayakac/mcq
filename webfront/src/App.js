import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout"; // Layout with Sidebar
import NoMatch from "./layouts/NoMatch";
import AuthPageContainer from "./layouts/AuthPageContainer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLayout from "./layouts/AdminLayout";
import AdminAuthPageContainer from "./layouts/AdminAuthPageContainer";
import AdminLogin from "./pages/admin/Login";
import Dashboard from "./components/Dashboard";
import Curriculums from "./components/Curriculums";
import Courses from "./components/Courses";
import Exams from "./components/Exams";
import Students from "./components/Students";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              {/* Home component can be added here if necessary */}
              <div>Welcome to the Home Page</div>
            </Layout>
          }
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
        <Route
          path="students"
          element={
            <Layout>
              <Students />
            </Layout>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="admin" element={<AdminLayout />}>
          <Route
            index
            element={
              <AdminAuthPageContainer>
                <div>Admin Auth Page</div>
              </AdminAuthPageContainer>
            }
          />
          <Route path="login" element={<AdminLogin />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
