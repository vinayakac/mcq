import React, { useState } from "react"; // Import React and useState
import { Route, Routes } from "react-router-dom"; // Import Route and Routes
import "./App.css"; // Import CSS styles
import Layout from "./layouts/Layout"; // Import Layout
import NoMatch from "./layouts/NoMatch"; // Import NoMatch component
import AuthPageContainer from "./layouts/AuthPageContainer"; // Import AuthPageContainer
import Login from "./pages/Login"; // Import Login page
import Register from "./pages/Register"; // Import Register page
import AdminLayout from "./layouts/AdminLayout"; // Import AdminLayout
import AdminAuthPageContainer from "./layouts/AdminAuthPageContainer"; // Import AdminAuthPageContainer
import AdminLogin from "./pages/admin/Login"; // Import AdminLogin page
import Dashboard from "./components/Dashboard"; // Import Dashboard component

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <AuthPageContainer>
                <div>Auth Page</div>
              </AuthPageContainer>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="admin-login" element={<AdminLogin />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="*" element={<NoMatch />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
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
      </Routes>
    </div>
  );
}

export default App;
