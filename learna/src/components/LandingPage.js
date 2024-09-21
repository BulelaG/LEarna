import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './LandingPage.css'; // Custom styles

const LandingPage = ({ account }) => {
  const navigate = useNavigate(); // Declare navigate

  const handleViewCourse = (courseId) => {
    navigate(`/course/${courseId}`); // Use navigate to go to the course view
  };

  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <div className="jumbotron text-center text-white bg-primary py-5">
        <h1 className="display-4">Welcome to Web3 Learning Platform</h1>
        <p className="text-center">Account: {account ? account : 'Not connected'}</p>
        <p className="lead">Master decentralized applications with our courses</p>
        <button 
          className="btn btn-light btn-lg mt-3" 
          onClick={() => handleViewCourse(1)} // Navigate to Course 1
        >
          View Course 1
        </button>
      </div>

      {/* Courses Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Our Courses</h2>

        <div className="row">
          {/* Course Card 1 */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Course 1</h5>
                <p className="card-text">An introduction to blockchain technology and its applications.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleViewCourse(1)} // Navigate to Course 1
                >
                  View Course
                </button>
              </div>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Course 2</h5>
                <p className="card-text">Learn about Ethereum smart contracts and dApp development.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleViewCourse(2)} // Navigate to Course 2
                >
                  View Course
                </button>
              </div>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Course 3</h5>
                <p className="card-text">Master Solidity and build your first decentralized application.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleViewCourse(3)} // Navigate to Course 3
                >
                  View Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
