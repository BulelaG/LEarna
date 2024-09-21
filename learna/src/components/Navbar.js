import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ account }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Web3 Learning Platform</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/courses">Courses</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/course/:id">Course Details</Link> {/* Adjust as needed */}
          </li>
        </ul>
        <span className="navbar-text">
          {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Not Connected'}
        </span>
      </div>
    </div>
  </nav>
);


export default Navbar;
