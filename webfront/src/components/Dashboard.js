import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import CurriculumList from "./CurriculumList";
import CourseList from "./CourseList";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/curriculums" element={<CurriculumList />} />
          <Route path="/curriculums/:curriculum" element={<CourseList />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
