import { useState } from "react";
import { ethers } from 'ethers';
import './LandingPage.css'; // Custom styles

function LandingPage() {
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
    <div className="landing-page">
      <header>
        <img src="/logo.png" alt="Logo" className="logo" />
        <button onClick={connectWallet} className="connect-wallet-btn">
          {walletAddress ? `Connected: ${walletAddress}` : "Connect Wallet"}
        </button>
      </header>

      <section className="hero">
        <h1>Unlock Your Web3 Future</h1>
        <p>Learn blockchain, earn tokens, and shape the future!</p>
      </section>

      <section className="courses">
        <div className="course-card">
          <h3>Blockchain 101</h3>
          <p>Start your journey into blockchain technology.</p>
        </div>
        <div className="course-card">
          <h3>Smart Contracts</h3>
          <p>Learn how to build decentralized applications (dApps).</p>
        </div>
        <div className="course-card">
          <h3>DeFi Mastery</h3>
          <p>Dive into decentralized finance (DeFi).</p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
