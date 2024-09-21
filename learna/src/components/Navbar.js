import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';
import './Navbar.css'; // Custom CSS for styling
import logo from '../assets/logo2-removebg-preview.png';

const Navbar = ({ account, setAccount }) => {
  const [walletAddress, setWalletAddress] = useState("");

  // Connect wallet function
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
        setAccount(address); // Setting account in parent component
      } catch (err) {
        console.error('Error connecting to wallet:', err);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <img src={logo} alt="ScholarShip Logo" className="logo" />
        <Link className="navbar-brand" to="/">
          ScholarShip
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
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
            {account && (
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link> {/* Profile Link */}
              </li>
            )}
          </ul>

          {/* Connect Wallet Button */}
          {account ? (
            <span className="navbar-text ms-auto">
              Account: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </span>
          ) : (
            <button
              className="btn btn-warning ms-auto"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
