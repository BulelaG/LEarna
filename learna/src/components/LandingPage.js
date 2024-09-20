import { useState } from "react";
import { ethers } from 'ethers';
import './LandingPage.css'; // Custom styles

const LandingPage = ({ account }) => {
    const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
      } catch (err) {
        console.log('Error connecting to wallet:', err);
      }
    } else {
      alert('Please install MetaMask!');
    }
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
          onClick={connectWallet}
          disabled={!!account}
        >
          {account ? 'Wallet Connected' : 'Connect Wallet'}
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
                <button className="btn btn-primary">View Course</button>
              </div>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Course 2</h5>
                <p className="card-text">Learn about Ethereum smart contracts and dApp development.</p>
                <button className="btn btn-primary">View Course</button>
              </div>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Course 3</h5>
                <p className="card-text">Master Solidity and build your first decentralized application.</p>
                <button className="btn btn-primary">View Course</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
