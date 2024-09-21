import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure this is your Navbar component
import LandingPage from './components/LandingPage';
import CoursesPage from './components/CoursesPage';
import CourseView from './components/CourseView';
import Profile from './components/Profile';

const App = () => {
  const [account, setAccount] = useState(null);

  return (
    <Router>
      <Navbar account={account} setAccount={setAccount} />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage account={account} />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:id" element={<CourseView />} />
          <Route path="/profile" element={<Profile account={account} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
