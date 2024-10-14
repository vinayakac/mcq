import React, { useState } from 'react'; // Import useState
import { Outlet, Link } from 'react-router-dom';
import './Dashboard.css'; // Ensure this file exists for styling

const Dashboard = () => {
  const [activeLink, setActiveLink] = useState('dashboard'); // Default active link

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the active link when clicked
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h1>MCQ Application</h1>
        
        <nav>
          <ul>
            <li>
              <Link 
                to="#" // Change to "#" to prevent navigation
                className={activeLink === 'dashboard' ? 'active' : ''} 
                onClick={() => handleLinkClick('dashboard')}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="curriculums" 
                className={activeLink === 'curriculums' ? 'active' : ''} 
                onClick={() => handleLinkClick('curriculums')}
              >
                Curriculums
              </Link>
            </li>
            <li>
              <Link 
                to="courses" 
                className={activeLink === 'courses' ? 'active' : ''} 
                onClick={() => handleLinkClick('courses')}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link 
                to="mcq-exams" 
                className={activeLink === 'mcq-exams' ? 'active' : ''} 
                onClick={() => handleLinkClick('mcq-exams')}
              >
                MCQ Exams
              </Link>
            </li>
            <li>
              <Link 
                to="students" 
                className={activeLink === 'students' ? 'active' : ''} 
                onClick={() => handleLinkClick('students')}
              >
                Students
              </Link>
            </li>
          </ul>
        </nav>

        {/* Logout button */}
        <div className="logout-container">
          <button className="logout-button">
            <Link to="/login" className="logout-link"> {/* Change this to your login route */}
              Logout
            </Link>
          </button>
        </div>
      </aside>

      <main className="content">
        {activeLink === 'dashboard' ? ( // Conditional rendering based on active link
          <div className="welcome-message">
            <h2>Welcome to Dashboard</h2>
            <p>Your dashboard overview will be here.</p>
          </div>
        ) : (
          <Outlet /> // Render the nested routes for other links
        )}
        <div className="blank-page">
          {/* Additional content can go here */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;