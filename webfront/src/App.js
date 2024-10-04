import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import NoMatch from "./layouts/NoMatch";
import AuthPageContainer from "./layouts/AuthPageContainer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLayout from "./layouts/AdminLayout";
import AdminAuthPageContainer from "./layouts/AdminAuthPageContainer";
import AdminLogin from "./pages/admin/Login";

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
<<<<<<< HEAD
          <Route path="register" element={<Register />} />
=======
          <Route path="AdminLogin" element={<Login />} />

          <Route path="Register" element={<Register />} />
>>>>>>> develop
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
