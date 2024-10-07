import "./App.css";
import Layout from "./layouts/Layout";
import NoMatch from "./layouts/NoMatch";
import { Route, Routes } from "react-router-dom";
import AuthPageContainer from "./layouts/AuthPageContainer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLayout from "./layouts/AdminLayout";
import AdminAuthPageContainer from "./layouts/AdminAuthPageContainer";
import AdminLogin from "./pages/admin/Login";
import Dashboard from "./components/Dashboard";
import Courses1To4 from "./components/Courses1To4";
import Courses5To7 from "./components/Courses5To7";
import Courses8To10 from "./components/Courses8To10";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <AuthPageContainer>
                <div>auth page</div>
              </AuthPageContainer>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="AdminLogin" element={<Login />} />

          <Route path="Register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/courses1-4" element={<Courses1To4 />} />
          <Route path="/courses5-7" element={<Courses5To7 />} />
          <Route path="/courses8-10" element={<Courses8To10 />} />
          <Route path="*" element={<NoMatch />} />
        </Route>

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
