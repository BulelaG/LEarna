import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CoursesPage from './components/CoursesPage';
import CourseView from './components/CourseView';
import contractABI from './contractABI.json';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:id" element={<CourseView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
