
import React from 'react';
import { Outlet } from 'react-router-dom'; // Use Outlet for nested routes
import Sidebar from './Sidebar';
import './MainLayout.css'; // Import the CSS file for layout styling

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="content">
        <Outlet /> {/* This will render the matched child route */}
      </div>
    </div>
  );
};

export default MainLayout;
