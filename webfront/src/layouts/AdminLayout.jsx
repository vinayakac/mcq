import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Outlet />
    </div>
  );
}

export default AdminLayout;
