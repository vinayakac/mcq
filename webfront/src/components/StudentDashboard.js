import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './StudentDashboard.css';

const navItems = [
  { path: 'dashboard', label: 'Dashboard' },
  { path: 'join-course', label: 'Join Course' },
  { path: 'myexams', label: 'My Exams' },
];

const StudentDashboard = () => {
  const [activeLink, setActiveLink] = useState('dashboard');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h1>Student Application</h1>
        <nav>
          <ul>
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link 
                  to={path} 
                  className={activeLink === path ? 'active' : ''} 
                  onClick={() => handleLinkClick(path)}
                  aria-current={activeLink === path ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="logout-container">
          <Link to="/login" className="logout-button">
            Logout
          </Link>
        </div>
      </aside>
      <main className="content">
        {activeLink === 'dashboard' ? (
          <div className="welcome-message">
            <h2>Welcome to Dashboard</h2>
            <p>Your dashboard overview will be here.</p>
          </div>
        ) : (
          <Outlet />
        )}
        <div className="blank-page"></div>
      </main>
    </div>
  );
};

export default StudentDashboard;
