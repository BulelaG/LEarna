import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ethers } from 'ethers'; // Import ethers
import LandingPage from './components/LandingPage';
import CoursesPage from './components/CoursesPage';
import CourseView from './components/CourseView';
import Navbar from './components/Navbar';


const App = () => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const connectWallet = async () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
      } else {
        alert('Please install MetaMask');
      }
    };

    connectWallet();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar account={account} /> {/* Pass the account prop if needed */}
        <Routes>
          <Route exact path="/" element={<LandingPage account={account} />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:id" element={<CourseView />} />
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
