import { useState } from "react";
import { ethers } from 'ethers';
import './LandingPage.css'; // Custom styles

const LandingPage = ({ account }) => {
    const [walletAddress, setWalletAddress] = useState("");

    const connectWallet = async () => {
        if (window.ethereum) {
          try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            console.log('Account:', await signer.getAddress());
          } catch (err) {
            console.error('Error connecting to wallet:', err);
          }
        } else {
          alert('Please install MetaMask!');
        }
      };

    return (
        <div className="container-fluid p-0">
            {/* Hero Section */}
            <div className="jumbotron text-center">
    <img src="/path/to/your/logo.png" alt="ScholarShip Logo" className="logo" />
    <h1 className="display-4">Welcome to ScholarShip</h1>
    <p className="lead">Empowering Learning through Sponsorship and Rewards</p>
    <button className="btn btn-light btn-lg mt-3" onClick={connectWallet} disabled={!!account}>
        {account ? 'Wallet Connected' : 'Connect Wallet'}
    </button>
</div>


            {/* Courses Section */}
            <div className="container mt-5">
                <h2 className="text-center mb-4">Sponsored Courses</h2>
                <div className="row">
                    {/* Course Card 1 */}
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Blockchain Basics</h5>
                                <p className="card-text">An introduction to blockchain technology and its applications.</p>
                                <button className="btn btn-primary">View Course</button>
                            </div>
                        </div>
                    </div>

                    {/* Course Card 2 */}
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Ethereum Smart Contracts</h5>
                                <p className="card-text">Learn about Ethereum smart contracts and dApp development.</p>
                                <button className="btn btn-primary">View Course</button>
                            </div>
                        </div>
                    </div>

                    {/* Course Card 3 */}
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Solidity Mastery</h5>
                                <p className="card-text">Master Solidity and build your first decentralized application.</p>
                                <button className="btn btn-primary">View Course</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rewards Section */}
            <div className="container mt-5">
                <h2 className="text-center mb-4">Rewards for Completion</h2>
                <p className="text-center">Complete courses to earn rewards sponsored by companies.</p>
                <ul className="list-group">
                    <li className="list-group-item">✅ Earn tokens for each course completed</li>
                    <li className="list-group-item">✅ Certificates of achievement</li>
                    <li className="list-group-item">✅ Exclusive access to webinars and events</li>
                    <li className="list-group-item">✅ Opportunity for internships and job placements</li>
                </ul>
            </div>
        </div>
    );
};

export default LandingPage;
