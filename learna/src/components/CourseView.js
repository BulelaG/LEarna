import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import contractABI from '../contractABI.json'; // Ensure ABI is correctly imported

const CourseView = ({ courseId }) => {
  const [account, setAccount] = useState(null);
  const contractAddress = 'YOUR_CONTRACT_ADDRESS_HERE'; // Add your smart contract address here

  // Connect to wallet and set the user's account
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        setAccount(await signer.getAddress());

        // You can also initialize the contract here if needed
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
      } catch (error) {
        console.error("Error connecting to wallet: ", error);
      }
    } else {
      alert('Please install MetaMask');
    }
  };

  // Complete the course and trigger the smart contract function
  const completeCourse = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        const tx = await contract.completeCourse(courseId); // Call the smart contract function
        await tx.wait(); // Wait for transaction confirmation
        alert("Course completed! You've been rewarded.");
      } catch (error) {
        console.error("Error completing course: ", error);
      }
    } else {
      alert('Please connect MetaMask');
    }
  };

  // Connect wallet on component mount
  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div>
      <h2>Course Details</h2>
      <p>Course description goes here...</p>
      <button onClick={completeCourse}>Complete Course</button>
      <p>Connected account: {account ? account : 'Not connected'}</p>
    </div>
  );
};

export default CourseView;
