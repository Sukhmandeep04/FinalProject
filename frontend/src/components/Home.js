import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h2>Welcome to Your Task Management System</h2>
      <p>Your central hub for managing tasks and projects efficiently.</p>
      <div>
        <h3>Key Features:</h3>
        <ul>
          <li>Organize tasks and projects effortlessly</li>
          <li>Track progress and status updates</li>
          <li>Collaborate with your team seamlessly</li>
        </ul>
      </div>
      <div>
        <Link to="/tasks">View Tasks</Link>
      </div>
      <div>
        <Link to="/projects">View Projects</Link>
      </div>
    </div>
  );
};

export default Homepage;
