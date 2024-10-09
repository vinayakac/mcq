/* Sidebar.css */

.sidebar {
  width: 250px; /* Adjust width as needed */
  height: 100vh; /* Full height */
  background-color: #2c3e50; /* Dark background color */
  color: #ecf0f1; /* Light text color */
  padding: 20px; /* Padding around the content */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2); /* Shadow effect */
  position: fixed; /* Fixed position */
}

.sidebar h3 {
  text-align: center;
  margin-bottom: 20px; /* Space below the title */
  font-size: 24px; /* Title font size */
  color: #ecf0f1; /* Title color */
}

.sidebar ul {
  list-style-type: none; /* Remove bullet points */
  padding: 0; /* Remove default padding */
}

.sidebar li {
  margin: 15px 0; /* Space between links */
}

.sidebar a {
  text-decoration: none; /* Remove underline from links */
  color: #ecf0f1; /* Link color */
  font-size: 18px; /* Font size for links */
  transition: color 0.3s ease; /* Smooth color transition */
}

.sidebar a:hover {
  color: #3498db; /* Change color on hover */
}

.sidebar a.active {
  font-weight: bold; /* Make active link bold */
  color: #3498db; /* Active link color */
}
