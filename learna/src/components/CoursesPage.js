import React from 'react';
import { Link } from 'react-router-dom';

const CoursesPage = () => {
  const courses = [
    { id: 1, title: 'Course 1', description: 'Description of Course 1' },
    { id: 2, title: 'Course 2', description: 'Description of Course 2' },
    { id: 3, title: 'Course 3', description: 'Description of Course 3' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Available Courses</h2>
      <div className="row">
        {courses.map(course => (
          <div className="col-md-4 mb-4" key={course.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <Link to={`/course/${course.id}`} className="btn btn-primary">
                  View Course
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
