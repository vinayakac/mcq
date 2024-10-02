import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Outlet />
    </div>
  );
}

export default Layout;
